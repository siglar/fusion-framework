/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * taken from https://github.com/reduxjs/redux-toolkit/tree/master/packages/toolkit/src
 */

import { Action, PayloadAction } from './types/actions';
import { IfMaybeUndefined, IfVoid, IsAny, IsUnknownOrNonInferrable } from './types/ts-helpers';

/**
 * A "prepare" method to be used as the second parameter of `createAction`.
 * Takes any number of arguments and returns a Flux Standard Action without
 * type (will be added later) that *must* contain a payload (might be undefined).
 *
 * taken from https://github.com/reduxjs/redux-toolkit/tree/master/packages/toolkit/src
 *
 * @public
 */
export type PrepareAction<P> =
    | ((...args: any[]) => { payload: P })
    | ((...args: any[]) => { payload: P; meta: any })
    | ((...args: any[]) => { payload: P; error: any })
    | ((...args: any[]) => { payload: P; meta: any; error: any });

/**
 * Internal version of `ActionCreatorWithPreparedPayload`. Not to be used externally.
 *
 */
export type _ActionCreatorWithPreparedPayload<
    PA extends PrepareAction<any> | void,
    T extends string = string
> = PA extends PrepareAction<infer P>
    ? ActionCreatorWithPreparedPayload<
          Parameters<PA>,
          P,
          T,
          ReturnType<PA> extends {
              error: infer E;
          }
              ? E
              : never,
          ReturnType<PA> extends {
              meta: infer M;
          }
              ? M
              : never
      >
    : void;

/**
 * Basic type for all action creators.
 *
 * @inheritdoc {redux#ActionCreator}
 */
export interface BaseActionCreator<P, T extends string = string, M = never, E = never> {
    type: T;
    match: (action: Action) => action is PayloadAction<P, T, M, E>;
}

/**
 * An action creator that takes multiple arguments that are passed
 * to a `PrepareAction` method to create the final Action.
 * @typeParam Args arguments for the action creator function
 * @typeParam P `payload` type
 * @typeParam T `type` name
 * @typeParam E optional `error` type
 * @typeParam M optional `meta` type
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithPreparedPayload<
    Args extends unknown[],
    P,
    T extends string = string,
    E = never,
    M = never
> extends BaseActionCreator<P, T, M, E> {
    /**
     * Calling this {@link redux#ActionCreator} with `Args` will return
     * an Action with a payload of type `P` and (depending on the `PrepareAction`
     * method used) a `meta`- and `error` property of types `M` and `E` respectively.
     */
    (...args: Args): PayloadAction<P, T, M, E>;
}

/**
 * An action creator of type `T` that takes an optional payload of type `P`.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithOptionalPayload<P, T extends string = string>
    extends BaseActionCreator<P, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload of `P`.
     * Calling it without an argument will return a PayloadAction with a payload of `undefined`.
     */
    (payload?: P): PayloadAction<P, T>;
}

/**
 * An action creator of type `T` that takes no payload.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithoutPayload<T extends string = string>
    extends BaseActionCreator<undefined, T> {
    /**
     * Calling this {@link redux#ActionCreator} will
     * return a {@link PayloadAction} of type `T` with a payload of `undefined`
     */
    (): PayloadAction<undefined, T>;
}

/**
 * An action creator of type `T` that requires a payload of type P.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithPayload<P, T extends string = string>
    extends BaseActionCreator<P, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload of `P`
     */
    (payload: P): PayloadAction<P, T>;
}

/**
 * An action creator of type `T` whose `payload` type could not be inferred. Accepts everything as `payload`.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithNonInferrablePayload<T extends string = string>
    extends BaseActionCreator<unknown, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload
     * of exactly the type of the argument.
     */
    <PT>(payload: PT): PayloadAction<PT, T>;
}

/**
 * An action creator that produces actions with a `payload` attribute.
 *
 * @typeParam P the `payload` type
 * @typeParam T the `type` of the resulting action
 * @typeParam PA if the resulting action is preprocessed by a `prepare` method, the signature of said method.
 *
 * @public
 */
export type PayloadActionCreator<
    P = void,
    T extends string = string,
    PA extends PrepareAction<P> | void = void
> = IfPrepareActionMethodProvided<
    PA,
    _ActionCreatorWithPreparedPayload<PA, T>,
    // else
    IsAny<
        P,
        ActionCreatorWithPayload<any, T>,
        IsUnknownOrNonInferrable<
            P,
            ActionCreatorWithNonInferrablePayload<T>,
            // else
            IfVoid<
                P,
                ActionCreatorWithoutPayload<T>,
                // else
                IfMaybeUndefined<
                    P,
                    ActionCreatorWithOptionalPayload<P, T>,
                    // else
                    ActionCreatorWithPayload<P, T>
                >
            >
        >
    >
>;

/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overridden so that it returns the action type,
 * allowing it to be used in reducer logic that is looking for that action type.
 *
 * @param type The action type to use for created actions.
 * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
 *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
 *
 * @public
 */
export function createAction<P = void, T extends string = string>(
    type: T
): PayloadActionCreator<P, T>;

/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overridden so that it returns the action type,
 * allowing it to be used in reducer logic that is looking for that action type.
 *
 * @param type The action type to use for created actions.
 * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
 *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
 *
 * @public
 */
export function createAction<PA extends PrepareAction<any>, T extends string = string>(
    type: T,
    prepareAction: PA
): PayloadActionCreator<ReturnType<PA>['payload'], T, PA>;

// eslint-disable-next-line @typescript-eslint/ban-types
export function createAction(type: string, prepareAction?: PrepareAction<any>): any {
    function actionCreator(...args: any[]) {
        if (prepareAction) {
            const prepared = prepareAction(...args);
            if (!prepared) {
                throw new Error('prepareAction did not return an object');
            }

            return {
                type,
                payload: prepared.payload,
                ...('meta' in prepared && { meta: prepared.meta }),
                ...('error' in prepared && { error: prepared.error }),
            };
        }
        return { type, payload: args[0] };
    }

    actionCreator.toString = () => `${type}`;

    actionCreator.type = type;

    actionCreator.match = (action: Action): action is PayloadAction => action.type === type;

    return actionCreator;
}

export const actionSuffixDivider = '::';

export const matchActionSuffix = (suffix: string) =>
    new RegExp(`${actionSuffixDivider}\\${suffix}$`);

export const actionBaseType = (action: Action) =>
    action.type.replace(matchActionSuffix('\\w+$'), '');

/**
 * Returns the action type of the actions created by the passed
 * `createAction()`-generated action creator (arbitrary action creators
 * are not supported).
 *
 * @param action The action creator whose action type to get.
 * @returns The action type used by the action creator.
 *
 * @public
 */
export function getType<T extends string>(actionCreator: PayloadActionCreator<any, T>): T {
    return `${actionCreator}` as T;
}

// helper types for more readable typings

type IfPrepareActionMethodProvided<PA extends PrepareAction<any> | void, True, False> = PA extends (
    ...args: any[]
) => any
    ? True
    : False;

import { AnyModule, CombinedModules, ModulesInstance } from '@equinor/fusion-framework-module';
import type { EventModule } from '@equinor/fusion-framework-module-event';
import type { HttpModule } from '@equinor/fusion-framework-module-http';
import { MsalModule } from '@equinor/fusion-framework-module-msal';
import type { ServiceDiscoveryModule } from '@equinor/fusion-framework-module-service-discovery';
import IApp from './app';

// TODO
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fusion = any;

export type AppEnv<TConfig = unknown, TProps = unknown> = {
    basename?: string;
    manifest?: AppManifest;
    config?: AppConfig<TConfig>;
    props?: TProps;
};

// TODO: change to module-services when new app service is created
export type ModuleDeps = [HttpModule, ServiceDiscoveryModule, EventModule];

export type AppType = 'standalone' | 'report' | 'launcher';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CurrentApp<TModules extends Array<AnyModule> = [], TEnv = any> =
    | IApp<TEnv, TModules>
    | null
    | undefined;

export type AppAuth = {
    clientId: string;
    resources: string[];
};

type AppCategory = {
    id?: string;
    name: string | null;
    color: string | null;
    defaultIcon: string | null;
};

export type AppManifest = {
    key: string;
    name: string;
    entry: string;
    version: string;
    shortName?: string;
    description?: string;
    type?: AppType;
    tags?: string[];
    // context?: ContextManifest;
    auth?: AppAuth[];
    icon?: string;
    order?: number;
    publishedDate?: Date;
    accentColor?: string;
    categoryId?: string;
    category?: AppCategory;
    hide?: boolean;
};

export type Endpoint = { name: string; uri: string; scopes?: string[] };

export type AppConfig<TEnvironment = unknown> = {
    environment: TEnvironment;
    endpoints: Record<string, string | Endpoint>;
};

/**
 * @template TEnvironment - name of hosted environment
 * @template TModule - ES module type (import return type)
 */
export type AppBundle<TEnvironment = unknown, TModule = unknown> = {
    manifest: AppManifest;
    config: AppConfig<TEnvironment>;
    module: TModule;
};

export type AppModules<TModules extends Array<AnyModule> | unknown = unknown> = CombinedModules<
    TModules,
    [EventModule, HttpModule, MsalModule]
>;

export type ComponentRenderArgs<TFusion extends Fusion = Fusion, TEnv = AppEnv> = {
    fusion: TFusion;
    env: TEnv;
};

export type AppScriptModule = {
    default: (el: HTMLElement, args: ComponentRenderArgs) => VoidFunction;
    renderApp: (el: HTMLElement, args: ComponentRenderArgs) => VoidFunction;
};

export type AppModulesInstance<TModules extends Array<AnyModule> | unknown = unknown> =
    ModulesInstance<AppModules<TModules>>;

# Change Log

## 0.1.15

### Patch Changes

-   [#958](https://github.com/equinor/fusion-framework/pull/958) [`e50acbb2`](https://github.com/equinor/fusion-framework/commit/e50acbb28ef10c83cf6e7913fa9f03ed971f0957) Thanks [@odinr](https://github.com/odinr)! - _refactor: only added missing deps for stand alone compile_

## 0.1.14

### Patch Changes

-   [#946](https://github.com/equinor/fusion-framework/pull/946) [`5a160d88`](https://github.com/equinor/fusion-framework/commit/5a160d88981ddfe861d391cfefe10f54dda3d352) Thanks [@odinr](https://github.com/odinr)! - Build/update typescript to 5

## 0.1.13

### Patch Changes

-   [#905](https://github.com/equinor/fusion-framework/pull/905) [`a7858a1c`](https://github.com/equinor/fusion-framework/commit/a7858a1c01542e2dc94370709f122b4b99c3219c) Thanks [@odinr](https://github.com/odinr)! - **🚧 Chore: dedupe packages**

    -   align all versions of typescript
    -   update types to build
        -   a couple of typecasts did not [satisfies](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#satisfies-support-in-jsdoc) and was recasted as `unknwon`, marked with `TODO`, should be fixed in future

-   Updated dependencies [[`a7858a1c`](https://github.com/equinor/fusion-framework/commit/a7858a1c01542e2dc94370709f122b4b99c3219c)]:
    -   @equinor/fusion-framework-react-module-bookmark@2.0.12

## 0.1.12

### Patch Changes

-   727fb935: fix(react-module-bookmark): module can be undefined

    the bookmark module might not been enable, which makes the application crash.

    **TODO:**

    -   [ ] create a simpler hook for using bookmark
    -   [ ] create a hook for exposing the module
    -   [ ] create better documentation

-   Updated dependencies [727fb935]
    -   @equinor/fusion-framework-react-module-bookmark@2.0.11

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.11](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.10...@equinor/fusion-framework-react-components-bookmark@0.1.11) (2023-05-24)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.10](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.9...@equinor/fusion-framework-react-components-bookmark@0.1.10) (2023-05-23)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.9](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.8...@equinor/fusion-framework-react-components-bookmark@0.1.9) (2023-05-22)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.8](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.7...@equinor/fusion-framework-react-components-bookmark@0.1.8) (2023-05-22)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## 0.1.7 (2023-05-22)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.6](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.5...@equinor/fusion-framework-react-components-bookmark@0.1.6) (2023-05-12)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.5](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.4...@equinor/fusion-framework-react-components-bookmark@0.1.5) (2023-05-11)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.4](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.3...@equinor/fusion-framework-react-components-bookmark@0.1.4) (2023-05-11)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## 0.1.3 (2023-05-10)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.2](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.1...@equinor/fusion-framework-react-components-bookmark@0.1.2) (2023-05-08)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## [0.1.1](https://github.com/equinor/fusion-framework/compare/@equinor/fusion-framework-react-components-bookmark@0.1.0...@equinor/fusion-framework-react-components-bookmark@0.1.1) (2023-05-05)

**Note:** Version bump only for package @equinor/fusion-framework-react-components-bookmark

## 0.1.0 (2023-04-24)

### Features

-   **bookmark-component:** new bookmark component for creating and editing bookmarks initial commit ([bd3bfec](https://github.com/equinor/fusion-framework/commit/bd3bfeca877df6076ca711333d0b96a44504c888))

### Bug Fixes

-   **bookmark-component:** add group by context ([20291f3](https://github.com/equinor/fusion-framework/commit/20291f3cd8284ff5b0eb2db30f9e4040a870ba70))
-   **bookmark-component:** removed comment ([72c7147](https://github.com/equinor/fusion-framework/commit/72c7147609b229fb68576068c0f2944e5e3bbae0))
-   **bookmark-component:** styles update, added loading spinner and update with current view' ([d5e1143](https://github.com/equinor/fusion-framework/commit/d5e1143f125410beb46a462e92591e3f9bbb809d))
-   **bookmark:** fix linting ([17b179f](https://github.com/equinor/fusion-framework/commit/17b179fbb25243730dd65cc116c86471074faabc))
-   pull request feedback fixes ([a0d9aa6](https://github.com/equinor/fusion-framework/commit/a0d9aa69a5ffc4e6da5061df61969d860c4be909))

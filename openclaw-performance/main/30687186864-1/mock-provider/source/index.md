# OpenClaw Source Performance

Generated: 2026-08-01T06:14:23.367Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 2963.8ms | 2995.1ms | 2963.7ms | 2849.7ms | 2918.7ms | 208.8ms | 974.8MB | 1.352 |
| skipChannels | gateway, skip channels | 2920.0ms | 2962.0ms | 2919.8ms | 2885.1ms | 2893.0ms | 210.5ms | 963.2MB | 1.395 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2777.0ms | 2784.4ms | 2776.3ms | 2702.8ms | 2710.8ms | 210.4ms | 857.9MB | 1.464 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 2768.9ms | 2809.7ms | 2772.0ms | 2682.4ms | 2690.2ms | 209.8ms | 864.3MB | 1.358 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5611.5ms | 5617.1ms | 5611.1ms | 5523.4ms | 5531.1ms | 213.0ms | 893.5MB | 1.295 |
| oneInternalHook | gateway, one configured internal hook | 4330.5ms | 4337.7ms | 4311.8ms | 4282.9ms | 4291.4ms | 210.0ms | 976.2MB | 1.397 |
| allInternalHooks | gateway, all internal hooks | 4280.6ms | 4399.7ms | 4286.1ms | 4249.4ms | 4264.0ms | 213.0ms | 997.2MB | 1.402 |
| fiftyPlugins | gateway, 50 manifest plugins | 3022.4ms | 3102.5ms | 2983.0ms | 2916.4ms | 2956.7ms | 212.5ms | 837.0MB | 1.342 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3043.6ms | 3068.4ms | 3043.4ms | 2809.1ms | 2847.1ms | 217.5ms | 834.9MB | 1.319 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1106.5MB | 974.8MB | -131.7MB (-11.9%) | -72.4MB (-13.6%) | improved |
| gateway boot | skipChannels | 1058.2MB | 963.2MB | -95.0MB (-9.0%) | -122.2MB (-24.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 975.5MB | 857.9MB | -117.6MB (-12.1%) | -253.6MB (-42.4%) | improved |
| gateway boot | preparedRuntimeScaleOne | 864.3MB | 864.3MB | +0.1MB (+0.0%) | +85.5MB (+32.9%) | stable |
| gateway boot | preparedRuntimeScaleMany | 863.5MB | 893.5MB | +30.0MB (+3.5%) | +8.7MB (+2.7%) | stable |
| gateway boot | oneInternalHook | 1151.3MB | 976.2MB | -175.1MB (-15.2%) | -128.2MB (-24.1%) | improved |
| gateway boot | allInternalHooks | 936.0MB | 997.2MB | +61.2MB (+6.5%) | -63.0MB (-11.2%) | stable |
| gateway boot | fiftyPlugins | 1014.8MB | 837.0MB | -177.8MB (-17.5%) | +5.8MB (+2.1%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1005.3MB | 834.9MB | -170.4MB (-16.9%) | -349.7MB (-53.6%) | improved |
| cli | gatewayHealthJson | 187.5MB | 188.5MB | +1.1MB (+0.6%) | n/a | stable |
| cli | configGetGatewayPort | 187.8MB | 186.6MB | -1.2MB (-0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | -476.7MB | -313.7MB | +163.0MB (-34.2%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 577.5MB | 531.6MB | ok |
| workboard | 573.7MB | 527.8MB | ok |
| acpx | 545.2MB | 499.3MB | ok |
| migrate-hermes | 541.7MB | 495.7MB | ok |
| llm-task | 533.3MB | 487.4MB | ok |
| active-memory | 529.6MB | 483.6MB | ok |
| xai | 529.6MB | 483.6MB | ok |
| voice-call | 528.6MB | 482.7MB | ok |
| openai | 528.1MB | 482.1MB | ok |
| memory-lancedb | 524.7MB | 478.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | plugins.bootstrap | 374.1ms | 384.7ms |
| default | runtime.post-attach | 360.1ms | 395.2ms |
| default | cli.main.gateway-run-select-environment | 283.5ms | 288.1ms |
| default | plugins.runtime-post-bind | 267.2ms | 296.5ms |
| default | plugins.gateway-load.loadMs | 251.5ms | 280.8ms |
| skipChannels | plugins.bootstrap | 375.7ms | 380.6ms |
| skipChannels | cli.main.gateway-run-select-environment | 287.6ms | 287.8ms |
| skipChannels | runtime.post-attach | 285.8ms | 331.1ms |
| skipChannels | plugins.runtime-post-bind | 267.2ms | 312.1ms |
| skipChannels | plugins.gateway-load.loadMs | 239.6ms | 260.5ms |
| preparedRuntimeCatalogStall | plugins.bootstrap | 366.1ms | 366.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 292.1ms | 299.5ms |
| preparedRuntimeCatalogStall | sidecars.main-session-recovery | 167.5ms | 168.4ms |
| preparedRuntimeCatalogStall | sidecars.model-runtime | 109.3ms | 118.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 106.0ms | 109.0ms |
| preparedRuntimeScaleOne | plugins.bootstrap | 366.3ms | 384.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 296.5ms | 302.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 138.9ms | 139.5ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 134.6ms | 134.6ms |
| preparedRuntimeScaleOne | cli.main.dotenv | 104.6ms | 107.7ms |
| preparedRuntimeScaleMany | plugins.bootstrap | 3187.0ms | 3226.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 317.2ms | 320.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 311.2ms | 314.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 298.2ms | 304.8ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 249.4ms | 258.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2688.3ms | 2701.3ms |
| oneInternalHook | plugins.bootstrap | 340.8ms | 341.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 288.4ms | 296.0ms |
| oneInternalHook | runtime.post-attach | 212.4ms | 215.3ms |
| oneInternalHook | plugins.runtime-post-bind | 186.5ms | 188.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2688.0ms | 2759.4ms |
| allInternalHooks | plugins.bootstrap | 342.4ms | 343.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 282.7ms | 291.4ms |
| allInternalHooks | runtime.post-attach | 207.1ms | 220.9ms |
| allInternalHooks | plugins.runtime-post-bind | 180.7ms | 194.4ms |
| fiftyPlugins | plugins.bootstrap | 437.7ms | 439.0ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 309.1ms | 316.8ms |
| fiftyPlugins | runtime.post-attach | 213.7ms | 215.4ms |
| fiftyPlugins | sidecars.main-session-recovery | 170.7ms | 176.5ms |
| fiftyPlugins | plugins.runtime-post-bind | 163.5ms | 164.4ms |
| fiftyStartupLazyPlugins | plugins.bootstrap | 448.8ms | 453.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 305.2ms | 321.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 125.1ms | 125.7ms |
| fiftyStartupLazyPlugins | cli.main.dotenv | 108.8ms | 111.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 88.9ms | 92.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10539.0ms | 0.000 | 2336.6MB | 1176.7MB | -1159.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9993.0ms | 0.200 | 981.9MB | 1150.6MB | 168.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10047.0ms | 0.199 | 964.4MB | 1014.5MB | 50.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 666.1ms | 2676.6ms | 188.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 828.4ms | 838.2ms | 186.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 133.3ms |

## Observations

No data.


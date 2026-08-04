# OpenClaw Source Performance

Generated: 2026-08-04T06:18:32.594Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3147.4ms | 3202.8ms | 3147.1ms | 2830.7ms | 3109.5ms | 217.7ms | 967.2MB | 1.275 |
| skipChannels | gateway, skip channels | 3133.9ms | 3265.2ms | 3133.7ms | 3100.5ms | 3109.9ms | 226.4ms | 894.6MB | 1.595 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2803.3ms | 2809.0ms | 2803.0ms | 2717.5ms | 2723.3ms | 226.1ms | 836.3MB | 1.429 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 2756.1ms | 3203.5ms | 2749.3ms | 2655.3ms | 2666.2ms | 226.3ms | 834.1MB | 1.561 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 2788.7ms | 4824.4ms | 2784.1ms | 2685.1ms | 2705.0ms | 222.8ms | 1022.3MB | 1.451 |
| oneInternalHook | gateway, one configured internal hook | 3129.7ms | 3195.5ms | 3129.6ms | 3096.7ms | 3115.0ms | 245.4ms | 935.3MB | 1.598 |
| allInternalHooks | gateway, all internal hooks | 3030.4ms | 3061.5ms | 3030.2ms | 2995.5ms | 3004.8ms | 220.9ms | 928.2MB | 1.405 |
| fiftyPlugins | gateway, 50 manifest plugins | 3088.7ms | 3095.9ms | 3059.5ms | 3003.9ms | 3041.0ms | 233.0ms | 853.9MB | 1.307 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3258.9ms | 4823.5ms | 3258.7ms | 2725.6ms | 2763.7ms | 220.7ms | 963.1MB | 1.451 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1004.1MB | 967.2MB | -37.0MB (-3.7%) | -36.2MB (-6.6%) | stable |
| gateway boot | skipChannels | 903.2MB | 894.6MB | -8.6MB (-1.0%) | -56.8MB (-12.8%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 856.4MB | 836.3MB | -20.2MB (-2.4%) | -46.6MB (-13.7%) | stable |
| gateway boot | preparedRuntimeScaleOne | 834.0MB | 834.1MB | +0.1MB (+0.0%) | +23.5MB (+6.9%) | stable |
| gateway boot | preparedRuntimeScaleMany | 997.4MB | 1022.3MB | +24.9MB (+2.5%) | -25.5MB (-7.4%) | stable |
| gateway boot | oneInternalHook | 911.7MB | 935.3MB | +23.5MB (+2.6%) | -0.3MB (-0.1%) | stable |
| gateway boot | allInternalHooks | 894.3MB | 928.2MB | +34.0MB (+3.8%) | -1.5MB (-0.3%) | stable |
| gateway boot | fiftyPlugins | 839.6MB | 853.9MB | +14.4MB (+1.7%) | +11.9MB (+3.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 789.2MB | 963.1MB | +174.0MB (+22.0%) | +21.3MB (+6.0%) | watch |
| cli | gatewayHealthJsonConnected | 187.0MB | 187.0MB | +0.0MB (+0.0%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 187.3MB | 187.3MB | +0.1MB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 187.0MB | 187.7MB | +0.7MB (+0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | -302.4MB | -139.3MB | +163.1MB (-53.9%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 87 bundled plugins | 704.2MB | 657.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 592.9MB | 546.6MB | ok |
| openai | 580.2MB | 533.8MB | ok |
| xai | 543.1MB | 496.7MB | ok |
| memory-lancedb | 542.6MB | 496.2MB | ok |
| acpx | 542.1MB | 495.7MB | ok |
| anthropic | 541.8MB | 495.4MB | ok |
| migrate-hermes | 536.9MB | 490.5MB | ok |
| active-memory | 533.4MB | 487.1MB | ok |
| workboard | 530.1MB | 483.8MB | ok |
| google-meet | 527.7MB | 481.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 579.1ms | 594.9ms |
| default | cli.main.gateway-run-select-environment | 291.5ms | 295.4ms |
| default | plugins.runtime-post-bind | 278.6ms | 284.1ms |
| default | plugins.gateway-load.loadMs | 250.7ms | 252.4ms |
| default | sidecars.model-runtime | 245.0ms | 246.2ms |
| skipChannels | runtime.post-attach | 318.1ms | 337.9ms |
| skipChannels | cli.main.gateway-run-select-environment | 301.4ms | 346.6ms |
| skipChannels | plugins.runtime-post-bind | 293.9ms | 295.5ms |
| skipChannels | plugins.gateway-load.loadMs | 263.5ms | 273.4ms |
| skipChannels | cli.main.gateway-run-pre-bootstrap | 145.1ms | 157.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 308.0ms | 317.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 159.3ms | 165.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 131.9ms | 132.9ms |
| preparedRuntimeCatalogStall | cli.main.dotenv | 114.6ms | 116.6ms |
| preparedRuntimeCatalogStall | startup.maintenance | 80.1ms | 86.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 300.5ms | 322.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 155.1ms | 181.4ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 133.3ms | 149.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 127.3ms | 140.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 124.9ms | 162.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 419.0ms | 432.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 410.3ms | 423.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 311.5ms | 321.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.staticProviderCatalogMs | 205.3ms | 205.9ms |
| preparedRuntimeScaleMany | post-ready.gateway-data.plugins | 184.8ms | 184.8ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 333.6ms | 350.1ms |
| oneInternalHook | runtime.post-attach | 319.5ms | 327.0ms |
| oneInternalHook | plugins.runtime-post-bind | 290.6ms | 300.8ms |
| oneInternalHook | plugins.gateway-load.loadMs | 265.0ms | 275.5ms |
| oneInternalHook | cli.main.gateway-run-pre-bootstrap | 167.1ms | 167.2ms |
| allInternalHooks | runtime.post-attach | 306.7ms | 347.5ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 301.1ms | 301.7ms |
| allInternalHooks | plugins.runtime-post-bind | 272.7ms | 316.7ms |
| allInternalHooks | plugins.gateway-load.loadMs | 253.7ms | 286.4ms |
| allInternalHooks | cli.main.gateway-run-pre-bootstrap | 149.2ms | 153.5ms |
| fiftyPlugins | sidecars.model-runtime | 403.2ms | 436.0ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 396.6ms | 429.1ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 338.5ms | 356.2ms |
| fiftyPlugins | runtime.post-attach | 210.7ms | 211.3ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 210.6ms | 224.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 386.4ms | 391.6ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 380.2ms | 385.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 313.0ms | 324.9ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 199.6ms | 203.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 172.2ms | 178.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14779.0ms | 0.068 | 1906.6MB | 1380.8MB | -525.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14985.0ms | 0.067 | 1211.0MB | 1259.3MB | 48.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 15259.0ms | 0.131 | 1801.6MB | 1861.3MB | 59.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 726.7ms | 769.8ms | 187.0MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 649.6ms | 654.1ms | 187.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 928.9ms | 929.3ms | 187.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 152.6ms |

## Observations

No data.


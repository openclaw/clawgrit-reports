# OpenClaw Source Performance

Generated: 2026-08-06T06:15:22.576Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3703.5ms | 3951.4ms | 3703.3ms | 2691.1ms | 3560.8ms | 112.3ms | 974.3MB | 1.518 |
| skipChannels | gateway, skip channels | 3984.8ms | 4139.7ms | 3984.8ms | 3017.1ms | 3026.6ms | 134.6ms | 996.0MB | 1.506 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3066.1ms | 3120.6ms | 3064.7ms | 2343.5ms | 2353.6ms | 110.2ms | 1007.0MB | 1.602 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3219.7ms | 3245.5ms | 3193.7ms | 2382.9ms | 2392.1ms | 112.7ms | 1008.0MB | 1.583 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3793.2ms | 3931.1ms | 3793.1ms | 2374.3ms | 2383.3ms | 111.4ms | 1014.4MB | 1.336 |
| oneInternalHook | gateway, one configured internal hook | 3435.3ms | 3481.7ms | 3435.1ms | 2505.8ms | 2523.6ms | 110.9ms | 975.6MB | 1.459 |
| allInternalHooks | gateway, all internal hooks | 3475.2ms | 3500.7ms | 3475.1ms | 2532.2ms | 2554.8ms | 110.5ms | 975.0MB | 1.450 |
| fiftyPlugins | gateway, 50 manifest plugins | 3896.0ms | 3923.8ms | 3896.0ms | 2742.1ms | 2809.8ms | 111.4ms | 1036.6MB | 1.303 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3820.0ms | 4018.1ms | 3816.1ms | 2681.5ms | 2746.4ms | 111.9ms | 1020.9MB | 1.493 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 968.2MB | 974.3MB | +6.1MB (+0.6%) | +1.5MB (+0.3%) | stable |
| gateway boot | skipChannels | 971.1MB | 996.0MB | +24.9MB (+2.6%) | +75.5MB (+25.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 992.2MB | 1007.0MB | +14.8MB (+1.5%) | -304.3MB (-48.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1009.1MB | 1008.0MB | -1.2MB (-0.1%) | -326.7MB (-49.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1004.0MB | 1014.4MB | +10.4MB (+1.0%) | -299.6MB (-47.1%) | stable |
| gateway boot | oneInternalHook | 966.0MB | 975.6MB | +9.6MB (+1.0%) | +65.4MB (+20.8%) | stable |
| gateway boot | allInternalHooks | 976.3MB | 975.0MB | -1.3MB (-0.1%) | +58.2MB (+18.9%) | stable |
| gateway boot | fiftyPlugins | 1001.2MB | 1036.6MB | +35.4MB (+3.5%) | +188.4MB (+89.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1028.9MB | 1020.9MB | -7.9MB (-0.8%) | +148.8MB (+63.4%) | stable |
| cli | gatewayHealthJsonConnected | 187.0MB | 186.8MB | -0.1MB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 187.0MB | 187.1MB | +0.1MB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 187.2MB | 187.1MB | -0.1MB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | -276.6MB | 83.9MB | +360.6MB (-130.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 804.7MB | 758.5MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 584.2MB | 538.0MB | ok |
| openai | 581.4MB | 535.1MB | ok |
| memory-lancedb | 579.2MB | 533.0MB | ok |
| workboard | 574.9MB | 528.7MB | ok |
| migrate-hermes | 543.9MB | 497.6MB | ok |
| codex | 536.8MB | 490.6MB | ok |
| llm-task | 526.0MB | 479.8MB | ok |
| active-memory | 513.1MB | 466.8MB | ok |
| google | 420.5MB | 374.3MB | ok |
| openrouter | 419.1MB | 372.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 1127.4ms | 1222.1ms |
| default | sidecars.model-runtime | 799.8ms | 851.9ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 788.6ms | 840.4ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 771.7ms | 821.7ms |
| default | cli.main.gateway-run-select-environment | 458.0ms | 472.7ms |
| skipChannels | cli.main.gateway-run-select-environment | 489.6ms | 540.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 412.8ms | 436.1ms |
| skipChannels | sidecars.model-runtime | 365.5ms | 406.9ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 355.0ms | 381.8ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 346.9ms | 372.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 423.8ms | 427.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 362.2ms | 368.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 159.9ms | 163.2ms |
| preparedRuntimeCatalogStall | gateway.server-impl-import | 123.6ms | 125.5ms |
| preparedRuntimeCatalogStall | startup.maintenance | 106.5ms | 111.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 438.9ms | 440.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 373.0ms | 385.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 161.2ms | 171.4ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 139.3ms | 144.9ms |
| preparedRuntimeScaleOne | gateway.server-impl-import | 123.3ms | 129.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 437.2ms | 463.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 429.0ms | 434.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 411.6ms | 416.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 369.8ms | 413.2ms |
| preparedRuntimeScaleMany | sidecars.chat-metadata | 324.4ms | 335.7ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 417.2ms | 418.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 349.2ms | 364.9ms |
| oneInternalHook | sidecars.model-runtime | 339.3ms | 346.2ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 329.2ms | 335.6ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 309.9ms | 316.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 420.0ms | 438.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 348.5ms | 356.0ms |
| allInternalHooks | sidecars.model-runtime | 338.6ms | 346.5ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 328.4ms | 336.0ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 312.7ms | 318.0ms |
| fiftyPlugins | sidecars.model-runtime | 517.8ms | 522.1ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 504.9ms | 509.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 442.3ms | 443.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 413.2ms | 420.4ms |
| fiftyPlugins | runtime.post-attach | 242.4ms | 243.2ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 541.8ms | 550.9ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 529.1ms | 535.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 456.5ms | 481.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 416.8ms | 438.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 232.7ms | 238.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15274.0ms | 0.131 | 1271.5MB | 1358.6MB | 87.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15220.0ms | 0.131 | 1230.2MB | 1386.9MB | 156.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 16022.0ms | 0.125 | 1195.4MB | 1203.4MB | 8.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 717.5ms | 741.1ms | 186.8MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 667.0ms | 671.7ms | 187.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 911.5ms | 940.4ms | 187.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 133.2ms |

## Observations

No data.


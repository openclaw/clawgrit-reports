# OpenClaw Source Performance

Generated: 2026-08-16T05:28:53.151Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 12795.1ms | 12830.4ms | 12795.1ms | 12163.9ms | 12679.2ms | 113.4ms | 1541.8MB | 1.416 |
| skipChannels | gateway, skip channels | 12751.9ms | 13013.4ms | 12751.8ms | 12065.1ms | 12070.8ms | 113.6ms | 2007.1MB | 1.490 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3671.5ms | 3675.0ms | 3671.3ms | 3273.7ms | 3280.2ms | 116.2ms | 1030.8MB | 1.383 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3725.0ms | 3765.9ms | 3724.8ms | 3206.5ms | 3211.3ms | 113.2ms | 1039.0MB | 1.343 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4640.2ms | 4737.5ms | 4636.1ms | 4465.3ms | 4470.4ms | 114.5ms | 1224.8MB | 1.347 |
| oneInternalHook | gateway, one configured internal hook | 12727.8ms | 12746.2ms | 12727.7ms | 12075.2ms | 12080.8ms | 114.5ms | 1620.3MB | 1.415 |
| allInternalHooks | gateway, all internal hooks | 12681.1ms | 12797.3ms | 12681.0ms | 12033.1ms | 12038.8ms | 110.7ms | 1466.4MB | 1.432 |
| fiftyPlugins | gateway, 50 manifest plugins | 4220.9ms | 4293.7ms | 4220.8ms | 3537.1ms | 3541.6ms | 115.9ms | 1061.3MB | 1.428 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4183.6ms | 4186.2ms | 4183.4ms | 3487.5ms | 3492.5ms | 113.5ms | 1074.2MB | 1.455 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1616.9MB | 1541.8MB | -75.0MB (-4.6%) | +155.7MB (+19.7%) | stable |
| gateway boot | skipChannels | 1532.6MB | 2007.1MB | +474.4MB (+31.0%) | +806.8MB (+158.1%) | watch |
| gateway boot | preparedRuntimeCatalogStall | 1029.0MB | 1030.8MB | +1.9MB (+0.2%) | -11.4MB (-2.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1042.7MB | 1039.0MB | -3.6MB (-0.3%) | -29.1MB (-6.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1214.9MB | 1224.8MB | +9.9MB (+0.8%) | -4.1MB (-0.7%) | stable |
| gateway boot | oneInternalHook | 1495.2MB | 1620.3MB | +125.1MB (+8.4%) | +72.8MB (+12.4%) | stable |
| gateway boot | allInternalHooks | 2441.2MB | 1466.4MB | -974.8MB (-39.9%) | -970.1MB (-57.5%) | improved |
| gateway boot | fiftyPlugins | 1005.9MB | 1061.3MB | +55.4MB (+5.5%) | -65.1MB (-14.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1050.7MB | 1074.2MB | +23.6MB (+2.2%) | -1.6MB (-0.4%) | stable |
| cli | gatewayHealthJsonConnected | 193.5MB | 193.5MB | 0.0MB (0.0%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 194.0MB | 193.7MB | -0.3MB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 193.8MB | 193.7MB | -0.1MB (-0.0%) | n/a | stable |
| mock hello | gateway RSS delta avg | 63.8MB | 30.5MB | -33.3MB (-52.2%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 695.9MB | 649.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| openai | 624.4MB | 578.2MB | ok |
| llm-task | 595.6MB | 549.4MB | ok |
| voice-call | 590.0MB | 543.8MB | ok |
| policy | 583.8MB | 537.6MB | ok |
| migrate-hermes | 581.3MB | 535.1MB | ok |
| codex | 543.2MB | 497.0MB | ok |
| memory-lancedb | 539.2MB | 493.0MB | ok |
| active-memory | 526.0MB | 479.7MB | ok |
| workboard | 525.6MB | 479.4MB | ok |
| beam | 521.5MB | 475.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9422.0ms | 9470.1ms |
| default | plugins.runtime-post-bind | 8877.2ms | 8941.6ms |
| default | plugins.gateway-load.loadMs | 8863.2ms | 8927.8ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8418.7ms | 8506.5ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8417.6ms | 8505.4ms |
| skipChannels | runtime.post-attach | 8837.4ms | 9087.6ms |
| skipChannels | plugins.runtime-post-bind | 8819.5ms | 9070.8ms |
| skipChannels | plugins.gateway-load.loadMs | 8795.1ms | 9048.0ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8349.0ms | 8631.9ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8347.9ms | 8630.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 492.5ms | 499.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 455.3ms | 458.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 233.3ms | 238.4ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 176.4ms | 178.6ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 174.7ms | 174.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 481.3ms | 492.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 451.6ms | 471.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 223.1ms | 230.1ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 204.9ms | 208.0ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 174.4ms | 174.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1462.2ms | 1503.0ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1277.7ms | 1298.1ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 913.2ms | 924.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 766.3ms | 767.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 734.2ms | 736.0ms |
| oneInternalHook | runtime.post-attach | 8839.7ms | 8888.8ms |
| oneInternalHook | plugins.runtime-post-bind | 8813.1ms | 8854.2ms |
| oneInternalHook | plugins.gateway-load.loadMs | 8791.1ms | 8833.4ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8364.3ms | 8418.7ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8363.2ms | 8417.6ms |
| allInternalHooks | runtime.post-attach | 8791.4ms | 8900.0ms |
| allInternalHooks | plugins.runtime-post-bind | 8764.3ms | 8873.4ms |
| allInternalHooks | plugins.gateway-load.loadMs | 8742.4ms | 8851.3ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8317.8ms | 8434.5ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8316.6ms | 8433.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 516.0ms | 527.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 495.3ms | 510.7ms |
| fiftyPlugins | sidecars.model-runtime | 380.9ms | 386.5ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 366.4ms | 373.2ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 294.4ms | 297.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 531.0ms | 539.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 509.6ms | 520.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 383.3ms | 393.1ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 370.5ms | 379.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 300.0ms | 304.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12547.0ms | 0.080 | 1221.4MB | 1285.5MB | 64.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12523.0ms | 0.160 | 1360.8MB | 1384.3MB | 23.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12437.0ms | 0.161 | 1350.5MB | 1354.3MB | 3.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 717.9ms | 726.4ms | 193.5MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 699.1ms | 728.4ms | 193.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 933.4ms | 969.8ms | 193.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 149.6ms |

## Observations

No data.


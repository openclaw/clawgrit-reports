# OpenClaw Source Performance

Generated: 2026-08-16T11:21:30.457Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 12636.8ms | 12907.5ms | 12632.0ms | 11934.5ms | 12514.6ms | 111.7ms | 1439.7MB | 1.439 |
| skipChannels | gateway, skip channels | 12638.3ms | 12741.4ms | 12638.2ms | 11930.3ms | 11943.8ms | 117.6ms | 1515.5MB | 1.424 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3682.7ms | 3707.3ms | 3682.4ms | 3263.4ms | 3269.0ms | 114.8ms | 1039.2MB | 1.380 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3829.7ms | 3862.9ms | 3829.5ms | 3291.7ms | 3297.0ms | 113.6ms | 976.5MB | 1.314 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4692.3ms | 4718.6ms | 4687.9ms | 4524.6ms | 4529.9ms | 115.1ms | 1176.4MB | 1.334 |
| oneInternalHook | gateway, one configured internal hook | 12709.3ms | 12770.1ms | 12709.2ms | 11994.5ms | 12000.1ms | 113.4ms | 1536.5MB | 1.437 |
| allInternalHooks | gateway, all internal hooks | 12750.2ms | 12913.4ms | 12750.2ms | 12047.1ms | 12052.6ms | 116.2ms | 1495.3MB | 1.431 |
| fiftyPlugins | gateway, 50 manifest plugins | 4344.1ms | 4344.8ms | 4341.7ms | 3637.5ms | 3642.3ms | 118.0ms | 1081.7MB | 1.384 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4232.8ms | 4237.5ms | 4232.6ms | 3537.6ms | 3542.5ms | 110.4ms | 1090.9MB | 1.442 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 703.5MB | 657.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| openai | 588.7MB | 542.5MB | ok |
| migrate-hermes | 584.5MB | 538.3MB | ok |
| llm-task | 584.3MB | 538.0MB | ok |
| voice-call | 578.8MB | 532.5MB | ok |
| memory-lancedb | 548.6MB | 502.4MB | ok |
| codex | 541.7MB | 495.5MB | ok |
| workboard | 534.7MB | 488.4MB | ok |
| active-memory | 524.6MB | 478.3MB | ok |
| beam | 518.3MB | 472.0MB | ok |
| google | 440.7MB | 394.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9243.8ms | 9498.0ms |
| default | plugins.runtime-post-bind | 8648.9ms | 8878.0ms |
| default | plugins.gateway-load.loadMs | 8634.7ms | 8863.1ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8281.8ms | 8496.7ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8280.7ms | 8495.6ms |
| skipChannels | runtime.post-attach | 8650.3ms | 8746.7ms |
| skipChannels | plugins.runtime-post-bind | 8626.0ms | 8729.9ms |
| skipChannels | plugins.gateway-load.loadMs | 8602.6ms | 8715.8ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8256.1ms | 8367.6ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8255.1ms | 8366.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 502.7ms | 511.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 460.3ms | 478.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 235.5ms | 240.5ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 175.7ms | 188.7ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 162.5ms | 162.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 492.3ms | 498.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 478.2ms | 479.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 242.1ms | 242.6ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 203.8ms | 204.2ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 163.4ms | 166.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1482.3ms | 1508.0ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1292.2ms | 1306.7ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 925.6ms | 934.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 789.2ms | 803.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 757.5ms | 763.4ms |
| oneInternalHook | runtime.post-attach | 8717.1ms | 8719.7ms |
| oneInternalHook | plugins.runtime-post-bind | 8699.3ms | 8702.5ms |
| oneInternalHook | plugins.gateway-load.loadMs | 8677.2ms | 8680.7ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8311.2ms | 8315.3ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8310.1ms | 8314.1ms |
| allInternalHooks | runtime.post-attach | 8730.2ms | 8770.1ms |
| allInternalHooks | plugins.runtime-post-bind | 8713.5ms | 8744.2ms |
| allInternalHooks | plugins.gateway-load.loadMs | 8699.0ms | 8729.1ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8334.5ms | 8363.1ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8333.4ms | 8362.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 553.3ms | 558.3ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 520.8ms | 538.4ms |
| fiftyPlugins | sidecars.model-runtime | 403.2ms | 422.4ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 390.0ms | 408.8ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 320.2ms | 334.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 531.5ms | 551.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 504.7ms | 531.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 389.6ms | 393.4ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 376.2ms | 380.6ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 299.4ms | 310.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12721.0ms | 0.157 | 1210.9MB | 1276.6MB | 65.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12788.0ms | 0.078 | 1681.0MB | 1803.2MB | 122.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12662.0ms | 0.158 | 1228.6MB | 1291.0MB | 62.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 725.7ms | 736.5ms | 193.1MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 699.5ms | 705.5ms | 193.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 935.3ms | 936.7ms | 193.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 141.7ms |

## Observations

No data.


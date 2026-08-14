# OpenClaw Source Performance

Generated: 2026-08-14T22:33:34.642Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 15573.1ms | 15697.1ms | 15573.1ms | 14635.0ms | 15403.8ms | 147.3ms | 1502.3MB | 1.465 |
| skipChannels | gateway, skip channels | 16114.4ms | 17549.8ms | 16114.4ms | 15302.5ms | 15318.9ms | 148.5ms | 1976.5MB | 1.481 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4049.2ms | 4254.0ms | 4048.8ms | 3607.3ms | 3612.9ms | 134.5ms | 987.3MB | 1.539 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4593.5ms | 4702.0ms | 4593.6ms | 4006.9ms | 4013.0ms | 122.4ms | 973.9MB | 1.524 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5882.6ms | 7569.4ms | 5882.0ms | 5454.7ms | 5460.9ms | 129.9ms | 1189.9MB | 1.416 |
| oneInternalHook | gateway, one configured internal hook | 14523.2ms | 15073.3ms | 14523.2ms | 13751.2ms | 13758.8ms | 131.0ms | 1498.2MB | 1.460 |
| allInternalHooks | gateway, all internal hooks | 13600.8ms | 14397.0ms | 13600.8ms | 12860.4ms | 12866.5ms | 119.6ms | 1491.7MB | 1.459 |
| fiftyPlugins | gateway, 50 manifest plugins | 4106.3ms | 4115.4ms | 4104.9ms | 3622.6ms | 3627.2ms | 112.7ms | 1055.9MB | 1.480 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4224.6ms | 4764.7ms | 4224.3ms | 3730.3ms | 3735.5ms | 116.6ms | 1053.0MB | 1.469 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 696.2MB | 649.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 590.1MB | 543.8MB | ok |
| active-memory | 578.1MB | 531.7MB | ok |
| memory-lancedb | 547.5MB | 501.2MB | ok |
| codex | 542.7MB | 496.4MB | ok |
| openai | 541.5MB | 495.2MB | ok |
| beam | 541.2MB | 494.8MB | ok |
| workboard | 540.8MB | 494.4MB | ok |
| migrate-hermes | 539.4MB | 493.0MB | ok |
| voice-call | 531.2MB | 484.9MB | ok |
| opencode-go | 422.7MB | 376.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 11351.8ms | 11415.2ms |
| default | plugins.runtime-post-bind | 10566.6ms | 10719.6ms |
| default | plugins.gateway-load.loadMs | 10547.1ms | 10689.3ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 10106.7ms | 10244.0ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 10105.1ms | 10242.7ms |
| skipChannels | runtime.post-attach | 11289.6ms | 12447.9ms |
| skipChannels | plugins.runtime-post-bind | 11258.9ms | 12421.5ms |
| skipChannels | plugins.gateway-load.loadMs | 11239.4ms | 12389.9ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 10807.9ms | 11960.6ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 10806.6ms | 11959.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 531.0ms | 553.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 515.9ms | 554.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 249.8ms | 269.6ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 192.0ms | 194.7ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 179.3ms | 197.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 597.8ms | 638.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 541.8ms | 589.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 272.8ms | 286.3ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 237.4ms | 274.2ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 198.0ms | 201.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1806.5ms | 1976.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1571.8ms | 1602.7ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1159.9ms | 1220.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 610.4ms | 640.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 514.2ms | 529.8ms |
| oneInternalHook | runtime.post-attach | 9992.8ms | 10241.6ms |
| oneInternalHook | plugins.runtime-post-bind | 9974.1ms | 10222.3ms |
| oneInternalHook | plugins.gateway-load.loadMs | 9940.5ms | 10206.9ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 9556.3ms | 9806.1ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 9555.1ms | 9804.9ms |
| allInternalHooks | runtime.post-attach | 9355.5ms | 10080.6ms |
| allInternalHooks | plugins.runtime-post-bind | 9325.9ms | 10062.6ms |
| allInternalHooks | plugins.gateway-load.loadMs | 9310.8ms | 10044.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8944.6ms | 9682.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8943.5ms | 9681.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 549.0ms | 553.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 510.6ms | 527.3ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 269.6ms | 284.2ms |
| fiftyPlugins | sidecars.model-runtime | 173.4ms | 178.3ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 160.4ms | 165.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 557.6ms | 646.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 518.1ms | 699.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 259.5ms | 311.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 182.5ms | 235.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 166.7ms | 215.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14384.0ms | 0.070 | 1332.3MB | 1342.8MB | 10.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13491.0ms | 0.074 | 1213.2MB | 1349.1MB | 135.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13984.0ms | 0.143 | 1250.8MB | 1309.1MB | 58.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 783.1ms | 796.0ms | 193.0MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 811.5ms | 859.2ms | 193.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1117.3ms | 1154.8ms | 193.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.1ms | 185.5ms |

## Observations

No data.


# OpenClaw Source Performance

Generated: 2026-08-14T22:50:41.612Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 16999.3ms | 17363.4ms | 16999.3ms | 16089.0ms | 16843.3ms | 138.7ms | 1429.7MB | 1.440 |
| skipChannels | gateway, skip channels | 16715.9ms | 18657.1ms | 16715.8ms | 15747.9ms | 15755.3ms | 129.8ms | 1446.4MB | 1.457 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4335.3ms | 4469.0ms | 4335.1ms | 3862.3ms | 3868.9ms | 130.2ms | 1050.1MB | 1.566 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4370.9ms | 4639.2ms | 4370.6ms | 3807.1ms | 3815.9ms | 144.8ms | 974.8MB | 1.509 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6521.8ms | 7128.6ms | 6521.1ms | 6273.0ms | 6279.2ms | 166.2ms | 1193.6MB | 1.481 |
| oneInternalHook | gateway, one configured internal hook | 16405.4ms | 17006.4ms | 16405.4ms | 15575.1ms | 15583.3ms | 130.6ms | 1443.9MB | 1.418 |
| allInternalHooks | gateway, all internal hooks | 15405.5ms | 15749.2ms | 15405.5ms | 14581.1ms | 14587.7ms | 130.7ms | 1466.9MB | 1.428 |
| fiftyPlugins | gateway, 50 manifest plugins | 6012.4ms | 6314.6ms | 6012.3ms | 5317.9ms | 5336.8ms | 162.8ms | 1071.6MB | 1.497 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5162.1ms | 5199.3ms | 5161.3ms | 4581.7ms | 4587.5ms | 141.8ms | 1008.8MB | 1.539 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 678.7MB | 632.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 594.8MB | 548.5MB | ok |
| llm-task | 594.2MB | 548.0MB | ok |
| codex | 589.3MB | 543.1MB | ok |
| openai | 588.0MB | 541.7MB | ok |
| memory-lancedb | 548.8MB | 502.5MB | ok |
| voice-call | 540.5MB | 494.2MB | ok |
| workboard | 526.3MB | 480.0MB | ok |
| beam | 525.8MB | 479.6MB | ok |
| active-memory | 523.5MB | 477.3MB | ok |
| opencode-go | 421.9MB | 375.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 12766.4ms | 12799.9ms |
| default | plugins.runtime-post-bind | 12028.2ms | 12102.1ms |
| default | plugins.gateway-load.loadMs | 12011.5ms | 12081.8ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 11537.8ms | 11693.3ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 11536.4ms | 11692.0ms |
| skipChannels | runtime.post-attach | 11838.9ms | 13689.2ms |
| skipChannels | plugins.runtime-post-bind | 11815.8ms | 13651.4ms |
| skipChannels | plugins.gateway-load.loadMs | 11800.1ms | 13623.2ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 11334.3ms | 13043.3ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 11332.7ms | 13041.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 578.2ms | 588.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 556.5ms | 653.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 286.7ms | 289.5ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 210.4ms | 216.0ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 188.2ms | 189.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 610.9ms | 639.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 542.7ms | 603.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 274.1ms | 281.4ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 228.3ms | 241.4ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 184.7ms | 189.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2280.4ms | 2482.3ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1792.4ms | 1839.0ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1507.8ms | 1581.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 710.9ms | 762.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 539.6ms | 597.4ms |
| oneInternalHook | runtime.post-attach | 11816.3ms | 12000.1ms |
| oneInternalHook | plugins.runtime-post-bind | 11794.6ms | 11976.0ms |
| oneInternalHook | plugins.gateway-load.loadMs | 11777.2ms | 11957.3ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 11333.8ms | 11493.3ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 11332.4ms | 11491.8ms |
| allInternalHooks | runtime.post-attach | 10597.3ms | 11136.5ms |
| allInternalHooks | plugins.runtime-post-bind | 10577.9ms | 11110.8ms |
| allInternalHooks | plugins.gateway-load.loadMs | 10563.2ms | 11091.3ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 10145.3ms | 10635.6ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 10143.8ms | 10634.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 871.7ms | 908.9ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 788.8ms | 812.1ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 355.1ms | 441.5ms |
| fiftyPlugins | runtime.post-attach | 247.6ms | 380.1ms |
| fiftyPlugins | worker-environments.runtime-imports | 231.2ms | 248.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 728.2ms | 799.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 701.4ms | 724.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 339.0ms | 356.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 207.6ms | 217.7ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 203.5ms | 216.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 18354.0ms | 0.054 | 1349.4MB | 1361.6MB | 12.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 19915.0ms | 0.100 | 1242.3MB | 1366.7MB | 124.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 17134.0ms | 0.058 | 1355.7MB | 1388.2MB | 32.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 822.7ms | 847.5ms | 193.1MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 755.1ms | 757.7ms | 193.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1024.2ms | 1065.4ms | 193.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 161.4ms |

## Observations

No data.


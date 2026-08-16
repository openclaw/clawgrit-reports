# OpenClaw Source Performance

Generated: 2026-08-16T14:20:50.540Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 13042.7ms | 13225.2ms | 13042.6ms | 12394.2ms | 12932.8ms | 117.7ms | 2069.4MB | 1.512 |
| skipChannels | gateway, skip channels | 13035.0ms | 13888.4ms | 13034.9ms | 12342.1ms | 12347.7ms | 118.6ms | 2106.5MB | 1.458 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3622.4ms | 3659.5ms | 3618.6ms | 3233.1ms | 3238.0ms | 113.2ms | 1034.8MB | 1.387 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3777.3ms | 3841.8ms | 3777.0ms | 3253.1ms | 3258.1ms | 114.4ms | 1023.8MB | 1.329 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7155.8ms | 7200.0ms | 4686.9ms | 4519.2ms | 4531.1ms | 113.2ms | 1207.4MB | 1.397 |
| oneInternalHook | gateway, one configured internal hook | 13403.9ms | 13805.1ms | 13403.8ms | 12743.0ms | 12748.7ms | 116.4ms | 1450.1MB | 1.417 |
| allInternalHooks | gateway, all internal hooks | 12966.6ms | 13095.9ms | 12966.6ms | 12313.8ms | 12319.4ms | 115.8ms | 1506.5MB | 1.402 |
| fiftyPlugins | gateway, 50 manifest plugins | 4418.8ms | 4588.7ms | 4418.6ms | 3692.5ms | 3697.4ms | 121.8ms | 1143.1MB | 1.370 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4195.1ms | 4269.9ms | 4195.0ms | 3489.2ms | 3494.8ms | 117.1ms | 1136.1MB | 1.434 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 698.7MB | 652.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 615.0MB | 568.6MB | ok |
| migrate-hermes | 601.4MB | 555.1MB | ok |
| policy | 588.5MB | 542.2MB | ok |
| codex | 547.6MB | 501.3MB | ok |
| active-memory | 543.8MB | 497.5MB | ok |
| beam | 541.4MB | 495.0MB | ok |
| openai | 539.4MB | 493.1MB | ok |
| memory-lancedb | 538.2MB | 491.8MB | ok |
| llm-task | 534.7MB | 488.4MB | ok |
| workboard | 523.0MB | 476.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 9628.9ms | 9836.4ms |
| default | plugins.runtime-post-bind | 9076.8ms | 9224.5ms |
| default | plugins.gateway-load.loadMs | 9056.4ms | 9200.9ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8611.6ms | 8733.5ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadMs | 8610.5ms | 8732.3ms |
| skipChannels | runtime.post-attach | 9069.6ms | 9771.7ms |
| skipChannels | plugins.runtime-post-bind | 9052.3ms | 9753.7ms |
| skipChannels | plugins.gateway-load.loadMs | 9027.0ms | 9727.4ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8563.3ms | 9280.3ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadMs | 8562.1ms | 9279.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 483.9ms | 485.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 470.4ms | 477.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 238.5ms | 254.5ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 173.6ms | 175.5ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 171.7ms | 174.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 505.4ms | 506.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 461.1ms | 461.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 232.0ms | 238.6ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 204.4ms | 222.8ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 170.3ms | 174.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1481.5ms | 1520.7ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1314.0ms | 1326.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 924.9ms | 941.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 803.5ms | 807.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 768.7ms | 768.9ms |
| oneInternalHook | runtime.post-attach | 9412.5ms | 9630.8ms |
| oneInternalHook | plugins.runtime-post-bind | 9385.7ms | 9601.8ms |
| oneInternalHook | plugins.gateway-load.loadMs | 9363.3ms | 9585.2ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8945.3ms | 9109.0ms |
| oneInternalHook | plugins.gateway-load.plugin.teams-meetings.loadMs | 8944.2ms | 9107.7ms |
| allInternalHooks | runtime.post-attach | 9097.3ms | 9119.5ms |
| allInternalHooks | plugins.runtime-post-bind | 9080.1ms | 9091.4ms |
| allInternalHooks | plugins.gateway-load.loadMs | 9057.0ms | 9067.8ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 8606.3ms | 8631.7ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadMs | 8605.1ms | 8630.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 552.4ms | 590.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 535.7ms | 548.7ms |
| fiftyPlugins | sidecars.model-runtime | 393.2ms | 401.5ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 380.0ms | 387.5ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 303.8ms | 308.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 531.5ms | 548.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 518.0ms | 534.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 390.0ms | 399.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 377.1ms | 379.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 302.2ms | 310.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12755.0ms | 0.078 | 1716.1MB | 1752.8MB | 36.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12559.0ms | 0.159 | 1382.4MB | 1392.1MB | 9.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12804.0ms | 0.078 | 1371.6MB | 1406.3MB | 34.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 764.2ms | 764.9ms | 193.4MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 724.5ms | 767.0ms | 193.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 993.5ms | 1007.2ms | 193.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 156.1ms |

## Observations

No data.


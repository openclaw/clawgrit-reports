# OpenClaw Source Performance

Generated: 2026-08-22T05:25:40.083Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4354.3ms | 4414.7ms | 4354.2ms | 3756.1ms | 4233.9ms | 111.4ms | 1081.2MB | 1.381 |
| skipChannels | gateway, skip channels | 4354.1ms | 4379.6ms | 4354.0ms | 3887.5ms | 3453.2ms | 116.1ms | 1051.7MB | 1.384 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3858.1ms | 3926.5ms | 3857.7ms | 3583.8ms | 3406.3ms | 115.4ms | 955.3MB | 1.305 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4144.5ms | 4209.3ms | 4144.0ms | 3689.1ms | 3511.6ms | 117.8ms | 1056.8MB | 1.425 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6832.6ms | 6893.9ms | 6832.6ms | 5111.0ms | 4917.8ms | 117.4ms | 1065.7MB | 1.342 |
| oneInternalHook | gateway, one configured internal hook | 4399.8ms | 4499.6ms | 4399.8ms | 3921.8ms | 3504.2ms | 115.4ms | 1068.1MB | 1.369 |
| allInternalHooks | gateway, all internal hooks | 5347.4ms | 5512.5ms | 3927.1ms | 3880.6ms | 3452.2ms | 118.4ms | 1103.5MB | 1.323 |
| fiftyPlugins | gateway, 50 manifest plugins | 4378.2ms | 4427.2ms | 4378.2ms | 3917.5ms | 3637.3ms | 118.2ms | 1093.2MB | 1.387 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4180.3ms | 4204.7ms | 4179.7ms | 3817.1ms | 3633.1ms | 112.5ms | 1100.3MB | 1.435 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1982.9MB | 1081.2MB | -901.8MB (-45.5%) | -670.8MB (-63.6%) | improved |
| gateway boot | skipChannels | 1370.9MB | 1051.7MB | -319.2MB (-23.3%) | +19.0MB (+4.1%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 947.6MB | 955.3MB | +7.7MB (+0.8%) | +2.9MB (+0.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 965.6MB | 1056.8MB | +91.2MB (+9.4%) | +110.3MB (+22.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1120.3MB | 1065.7MB | -54.5MB (-4.9%) | +145.9MB (+23.3%) | stable |
| gateway boot | oneInternalHook | 1454.6MB | 1068.1MB | -386.6MB (-26.6%) | -98.6MB (-16.8%) | improved |
| gateway boot | allInternalHooks | 1528.2MB | 1103.5MB | -424.7MB (-27.8%) | +125.6MB (+26.6%) | improved |
| gateway boot | fiftyPlugins | 1082.3MB | 1093.2MB | +10.9MB (+1.0%) | +9.3MB (+1.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1101.2MB | 1100.3MB | -0.9MB (-0.1%) | +7.2MB (+1.2%) | stable |
| cli | gatewayHealthJsonWarmState | 203.8MB | 203.5MB | -0.3MB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 204.2MB | 204.2MB | -0.1MB (-0.0%) | n/a | stable |
| cli | configGetGatewayPort | 204.1MB | 204.0MB | -0.1MB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 64.9MB | 98.1MB | +33.2MB (+51.1%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 147 bundled plugins | 803.2MB | 757.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 603.5MB | 557.2MB | ok |
| clickclack | 593.3MB | 547.1MB | ok |
| workboard | 588.4MB | 542.2MB | ok |
| llm-task | 584.3MB | 538.0MB | ok |
| memory-lancedb | 583.2MB | 537.0MB | ok |
| beam | 582.6MB | 536.4MB | ok |
| codex | 549.1MB | 502.9MB | ok |
| migrate-hermes | 544.8MB | 498.6MB | ok |
| active-memory | 542.0MB | 495.8MB | ok |
| canvas | 541.0MB | 494.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 806.2ms | 832.1ms |
| default | cli.main.gateway-run-bootstrap | 588.9ms | 601.0ms |
| default | cli.main.gateway-run-select-environment | 489.2ms | 515.9ms |
| default | plugins.runtime-post-bind | 300.6ms | 308.2ms |
| default | plugins.gateway-load.loadMs | 280.4ms | 292.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 588.5ms | 610.8ms |
| skipChannels | cli.main.gateway-run-select-environment | 501.1ms | 513.6ms |
| skipChannels | plugins.runtime-post-bind | 294.5ms | 296.7ms |
| skipChannels | gateway.shutdown-runtime-import | 283.6ms | 292.9ms |
| skipChannels | plugins.gateway-load.loadMs | 273.0ms | 275.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 519.3ms | 533.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 498.1ms | 520.5ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 267.0ms | 289.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 242.6ms | 247.1ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 194.6ms | 210.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 541.6ms | 552.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 531.7ms | 536.1ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 274.9ms | 279.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 244.8ms | 246.2ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 224.1ms | 255.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1632.4ms | 1665.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1310.2ms | 1310.4ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 965.5ms | 998.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 573.7ms | 578.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 327.2ms | 332.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 604.4ms | 610.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 502.7ms | 513.2ms |
| oneInternalHook | plugins.runtime-post-bind | 291.1ms | 299.2ms |
| oneInternalHook | gateway.shutdown-runtime-import | 283.3ms | 285.8ms |
| oneInternalHook | plugins.gateway-load.loadMs | 276.7ms | 284.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 576.5ms | 616.5ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 505.4ms | 526.3ms |
| allInternalHooks | plugins.runtime-post-bind | 294.8ms | 360.9ms |
| allInternalHooks | plugins.gateway-load.loadMs | 280.3ms | 344.0ms |
| allInternalHooks | gateway.shutdown-runtime-import | 268.8ms | 273.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 589.3ms | 596.5ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 531.2ms | 552.0ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 263.3ms | 276.4ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 261.2ms | 274.2ms |
| fiftyPlugins | sidecars.model-runtime | 247.8ms | 258.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 583.1ms | 590.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 545.6ms | 557.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 272.0ms | 273.2ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 267.8ms | 274.9ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 185.7ms | 194.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12713.0ms | 0.079 | 1164.9MB | 1277.7MB | 112.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12517.0ms | 0.080 | 1271.3MB | 1381.2MB | 109.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12734.0ms | 0.079 | 1189.0MB | 1260.5MB | 71.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 680.0ms | 683.7ms | 203.5MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 666.9ms | 669.8ms | 204.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1171.8ms | 1198.5ms | 204.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.0ms | 167.7ms |

## Observations

No data.


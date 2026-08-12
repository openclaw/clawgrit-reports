# OpenClaw Source Performance

Generated: 2026-08-12T05:50:14.273Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3828.3ms | 3985.7ms | 3828.2ms | 3164.6ms | 3732.2ms | 110.9ms | 1138.9MB | 1.567 |
| skipChannels | gateway, skip channels | 3851.6ms | 4046.4ms | 3849.0ms | 3142.6ms | 3160.2ms | 116.4ms | 1125.1MB | 1.558 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3519.4ms | 3682.3ms | 3519.3ms | 3112.1ms | 3121.0ms | 121.8ms | 1020.2MB | 1.435 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3513.1ms | 3638.7ms | 3512.8ms | 3015.2ms | 3027.6ms | 124.5ms | 985.5MB | 1.441 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4254.6ms | 4266.9ms | 4254.5ms | 3164.2ms | 3171.2ms | 123.5ms | 980.4MB | 1.451 |
| oneInternalHook | gateway, one configured internal hook | 3801.2ms | 3912.9ms | 3801.2ms | 3158.2ms | 3164.8ms | 110.2ms | 1155.9MB | 1.533 |
| allInternalHooks | gateway, all internal hooks | 3940.1ms | 4460.7ms | 3940.5ms | 3233.2ms | 3247.5ms | 112.6ms | 1144.3MB | 1.542 |
| fiftyPlugins | gateway, 50 manifest plugins | 3912.8ms | 4064.4ms | 3912.6ms | 3379.2ms | 3385.0ms | 119.6ms | 999.7MB | 1.553 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3696.6ms | 3821.0ms | 3696.4ms | 3203.8ms | 3210.2ms | 115.4ms | 1068.2MB | 1.391 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1092.1MB | 1138.9MB | +46.8MB (+4.3%) | +32.0MB (+4.6%) | stable |
| gateway boot | skipChannels | 1097.4MB | 1125.1MB | +27.7MB (+2.5%) | +14.8MB (+3.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1023.3MB | 1020.2MB | -3.1MB (-0.3%) | +28.9MB (+6.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 987.4MB | 985.5MB | -1.8MB (-0.2%) | +25.4MB (+6.9%) | stable |
| gateway boot | preparedRuntimeScaleMany | 987.4MB | 980.4MB | -7.0MB (-0.7%) | +17.7MB (+4.8%) | stable |
| gateway boot | oneInternalHook | 1126.8MB | 1155.9MB | +29.1MB (+2.6%) | +105.4MB (+24.4%) | stable |
| gateway boot | allInternalHooks | 1096.3MB | 1144.3MB | +48.0MB (+4.4%) | +40.4MB (+9.9%) | stable |
| gateway boot | fiftyPlugins | 980.2MB | 999.7MB | +19.5MB (+2.0%) | -2.9MB (-0.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 990.2MB | 1068.2MB | +78.0MB (+7.9%) | +145.5MB (+40.9%) | stable |
| cli | gatewayHealthJsonConnected | 189.6MB | 189.5MB | -0.0MB (-0.0%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 188.7MB | 190.0MB | +1.3MB (+0.7%) | n/a | stable |
| cli | configGetGatewayPort | 189.1MB | 189.8MB | +0.7MB (+0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 194.5MB | 196.9MB | +2.3MB (+1.2%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 671.2MB | 624.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 589.6MB | 543.4MB | ok |
| codex | 583.3MB | 537.0MB | ok |
| voice-call | 578.3MB | 532.1MB | ok |
| active-memory | 550.5MB | 504.2MB | ok |
| migrate-hermes | 536.4MB | 490.2MB | ok |
| workboard | 534.3MB | 488.1MB | ok |
| memory-lancedb | 519.0MB | 472.8MB | ok |
| openai | 518.5MB | 472.3MB | ok |
| beam | 515.0MB | 468.7MB | ok |
| google | 423.2MB | 376.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 755.8ms | 792.8ms |
| default | cli.main.gateway-run-bootstrap | 443.2ms | 446.0ms |
| default | cli.main.gateway-run-select-environment | 441.4ms | 444.9ms |
| default | sidecars.model-runtime | 375.8ms | 398.3ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 366.0ms | 387.6ms |
| skipChannels | cli.main.gateway-run-select-environment | 448.1ms | 461.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 426.0ms | 426.9ms |
| skipChannels | sidecars.model-runtime | 395.4ms | 434.5ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 373.2ms | 408.0ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 365.1ms | 399.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 467.8ms | 484.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 466.1ms | 482.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 184.2ms | 200.9ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 182.4ms | 192.2ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 145.2ms | 149.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 477.8ms | 491.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 435.2ms | 462.2ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 202.0ms | 211.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 170.0ms | 176.7ms |
| preparedRuntimeScaleOne | gateway.server-start-import | 143.7ms | 157.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 492.5ms | 498.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 449.1ms | 457.7ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 442.0ms | 462.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 430.2ms | 445.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 409.7ms | 425.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 440.2ms | 448.5ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 419.6ms | 442.7ms |
| oneInternalHook | sidecars.model-runtime | 385.3ms | 389.8ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 374.5ms | 377.9ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 353.8ms | 365.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 451.5ms | 810.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 433.5ms | 440.2ms |
| allInternalHooks | sidecars.model-runtime | 375.3ms | 377.4ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 365.1ms | 367.3ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 357.2ms | 359.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 510.6ms | 520.1ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 471.2ms | 490.9ms |
| fiftyPlugins | sidecars.model-runtime | 216.8ms | 217.9ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 202.7ms | 203.0ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 197.7ms | 212.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 495.7ms | 565.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 454.5ms | 524.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 201.7ms | 212.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 189.8ms | 231.9ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 189.7ms | 198.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12338.0ms | 0.081 | 1178.0MB | 1379.1MB | 201.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12514.0ms | 0.080 | 1179.6MB | 1368.4MB | 188.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12676.0ms | 0.158 | 1126.6MB | 1327.3MB | 200.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 757.0ms | 775.0ms | 189.5MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 737.8ms | 751.3ms | 190.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 899.1ms | 964.3ms | 189.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 161.8ms |

## Observations

No data.


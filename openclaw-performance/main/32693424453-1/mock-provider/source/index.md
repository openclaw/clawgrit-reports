# OpenClaw Source Performance

Generated: 2026-08-24T05:31:40.691Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4575.3ms | 4727.9ms | 4574.3ms | 4013.1ms | 4453.2ms | 116.5ms | 1089.7MB | 1.322 |
| skipChannels | gateway, skip channels | 4540.7ms | 4563.5ms | 4540.3ms | 4114.3ms | 3658.7ms | 112.6ms | 1097.0MB | 1.326 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4062.4ms | 4069.4ms | 4061.9ms | 3783.3ms | 3594.3ms | 112.8ms | 959.8MB | 1.240 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4210.1ms | 4211.1ms | 4209.8ms | 3766.9ms | 3581.0ms | 116.0ms | 976.9MB | 1.192 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6727.9ms | 6774.2ms | 6727.7ms | 5049.1ms | 4872.4ms | 114.7ms | 1089.4MB | 1.339 |
| oneInternalHook | gateway, one configured internal hook | 4598.6ms | 4598.8ms | 4598.6ms | 4118.1ms | 3659.5ms | 116.2ms | 1085.8MB | 1.317 |
| allInternalHooks | gateway, all internal hooks | 5501.6ms | 5620.1ms | 4165.3ms | 4106.5ms | 3643.9ms | 117.8ms | 1128.8MB | 1.423 |
| fiftyPlugins | gateway, 50 manifest plugins | 4545.0ms | 4576.0ms | 4545.1ms | 4122.7ms | 3844.4ms | 115.0ms | 1048.5MB | 1.329 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4330.4ms | 4355.7ms | 4329.8ms | 3984.0ms | 3802.1ms | 113.7ms | 1025.1MB | 1.156 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1053.8MB | 1089.7MB | +35.9MB (+3.4%) | +98.1MB (+20.0%) | stable |
| gateway boot | skipChannels | 1093.0MB | 1097.0MB | +4.0MB (+0.4%) | +4.5MB (+0.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1048.1MB | 959.8MB | -88.4MB (-8.4%) | +8.2MB (+1.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 933.4MB | 976.9MB | +43.5MB (+4.7%) | +39.5MB (+8.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1083.4MB | 1089.4MB | +6.1MB (+0.6%) | +0.8MB (+0.1%) | stable |
| gateway boot | oneInternalHook | 1092.4MB | 1085.8MB | -6.6MB (-0.6%) | -109.0MB (-18.1%) | stable |
| gateway boot | allInternalHooks | 1101.4MB | 1128.8MB | +27.3MB (+2.5%) | -8.7MB (-1.4%) | stable |
| gateway boot | fiftyPlugins | 1063.6MB | 1048.5MB | -15.1MB (-1.4%) | -135.7MB (-21.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1064.5MB | 1025.1MB | -39.4MB (-3.7%) | -146.3MB (-23.1%) | stable |
| cli | gatewayHealthJsonWarmState | 205.7MB | 204.7MB | -1.0MB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 204.5MB | 204.8MB | +0.3MB (+0.1%) | n/a | stable |
| cli | configGetGatewayPort | 204.1MB | 205.5MB | +1.3MB (+0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | 78.2MB | 71.3MB | -6.9MB (-8.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 146 bundled plugins | 800.6MB | 754.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| beam | 604.7MB | 558.4MB | ok |
| clickclack | 603.0MB | 556.8MB | ok |
| llm-task | 590.8MB | 544.5MB | ok |
| opencode | 590.6MB | 544.4MB | ok |
| workboard | 588.9MB | 542.7MB | ok |
| memory-lancedb | 553.5MB | 507.3MB | ok |
| openai | 548.8MB | 502.5MB | ok |
| xai | 548.6MB | 502.3MB | ok |
| codex | 544.7MB | 498.5MB | ok |
| migrate-hermes | 544.2MB | 498.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 797.4ms | 839.9ms |
| default | cli.main.gateway-run-bootstrap | 688.5ms | 698.6ms |
| default | cli.main.gateway-run-select-environment | 513.2ms | 517.7ms |
| default | plugins.runtime-post-bind | 305.5ms | 315.3ms |
| default | gateway.shutdown-runtime-import | 288.6ms | 328.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 685.1ms | 685.8ms |
| skipChannels | cli.main.gateway-run-select-environment | 514.5ms | 515.4ms |
| skipChannels | plugins.runtime-post-bind | 311.4ms | 328.9ms |
| skipChannels | plugins.gateway-load.loadMs | 289.2ms | 314.2ms |
| skipChannels | gateway.shutdown-runtime-import | 285.7ms | 286.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 601.9ms | 612.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 524.7ms | 528.6ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 285.9ms | 290.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 233.7ms | 234.7ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 194.8ms | 230.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 591.2ms | 598.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 529.3ms | 534.0ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 292.2ms | 293.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 228.7ms | 235.9ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 222.9ms | 234.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1598.3ms | 1637.8ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1280.3ms | 1280.6ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 910.3ms | 921.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 566.1ms | 573.4ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 320.4ms | 328.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 681.7ms | 689.6ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 510.6ms | 512.3ms |
| oneInternalHook | plugins.runtime-post-bind | 303.9ms | 310.5ms |
| oneInternalHook | gateway.shutdown-runtime-import | 291.4ms | 298.7ms |
| oneInternalHook | plugins.gateway-load.loadMs | 281.2ms | 288.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 697.3ms | 704.2ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 513.4ms | 534.0ms |
| allInternalHooks | plugins.runtime-post-bind | 310.9ms | 311.0ms |
| allInternalHooks | plugins.gateway-load.loadMs | 287.4ms | 296.0ms |
| allInternalHooks | gateway.shutdown-runtime-import | 282.7ms | 295.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 673.6ms | 692.3ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 567.0ms | 568.6ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 287.6ms | 291.1ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 272.4ms | 276.4ms |
| fiftyPlugins | sidecars.model-runtime | 220.6ms | 226.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 661.7ms | 682.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 547.1ms | 550.0ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 283.8ms | 287.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 259.5ms | 272.6ms |
| fiftyStartupLazyPlugins | worker-environments.runtime-imports | 185.1ms | 185.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12837.0ms | 0.078 | 1167.1MB | 1233.4MB | 66.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12623.0ms | 0.079 | 1212.5MB | 1282.5MB | 70.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12633.0ms | 0.079 | 1186.2MB | 1263.7MB | 77.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 682.2ms | 686.1ms | 204.7MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 664.9ms | 685.6ms | 204.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1154.9ms | 1192.0ms | 205.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.0ms | 163.7ms |

## Observations

No data.


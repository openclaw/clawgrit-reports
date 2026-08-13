# OpenClaw Source Performance

Generated: 2026-08-13T05:52:01.030Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4450.1ms | 4761.4ms | 4450.1ms | 3693.8ms | 4342.9ms | 132.1ms | 1174.1MB | 1.470 |
| skipChannels | gateway, skip channels | 4520.6ms | 4774.2ms | 4520.5ms | 3785.3ms | 3798.4ms | 125.6ms | 1154.8MB | 1.466 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3828.1ms | 3871.4ms | 3828.1ms | 3425.3ms | 3432.0ms | 117.0ms | 945.2MB | 1.353 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3989.0ms | 4463.2ms | 3988.7ms | 3478.9ms | 3484.5ms | 120.1ms | 1001.5MB | 1.504 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6734.6ms | 6920.5ms | 6734.6ms | 4639.9ms | 4647.0ms | 115.1ms | 1119.7MB | 1.355 |
| oneInternalHook | gateway, one configured internal hook | 4205.4ms | 4291.1ms | 4205.0ms | 3505.7ms | 3513.8ms | 117.8ms | 1165.7MB | 1.439 |
| allInternalHooks | gateway, all internal hooks | 4574.0ms | 4613.1ms | 4573.8ms | 3865.7ms | 3872.5ms | 128.8ms | 1176.0MB | 1.530 |
| fiftyPlugins | gateway, 50 manifest plugins | 4246.6ms | 4346.8ms | 4246.4ms | 3773.9ms | 3778.9ms | 117.8ms | 1079.7MB | 1.449 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3997.8ms | 4044.7ms | 3997.5ms | 3523.6ms | 3529.5ms | 110.1ms | 1024.4MB | 1.501 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1138.9MB | 1174.1MB | +35.3MB (+3.1%) | +25.4MB (+3.5%) | stable |
| gateway boot | skipChannels | 1125.1MB | 1154.8MB | +29.7MB (+2.6%) | +57.2MB (+13.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1020.2MB | 945.2MB | -75.0MB (-7.3%) | -78.4MB (-15.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 985.5MB | 1001.5MB | +15.9MB (+1.6%) | +34.7MB (+8.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 980.4MB | 1119.7MB | +139.3MB (+14.2%) | +294.8MB (+76.9%) | stable |
| gateway boot | oneInternalHook | 1155.9MB | 1165.7MB | +9.8MB (+0.8%) | +16.2MB (+3.0%) | stable |
| gateway boot | allInternalHooks | 1144.3MB | 1176.0MB | +31.8MB (+2.8%) | +20.8MB (+4.6%) | stable |
| gateway boot | fiftyPlugins | 999.7MB | 1079.7MB | +79.9MB (+8.0%) | +129.4MB (+32.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1068.2MB | 1024.4MB | -43.8MB (-4.1%) | -66.2MB (-13.2%) | stable |
| cli | gatewayHealthJsonConnected | 189.5MB | 192.5MB | +3.0MB (+1.6%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 190.0MB | 192.7MB | +2.7MB (+1.4%) | n/a | stable |
| cli | configGetGatewayPort | 189.8MB | 192.3MB | +2.5MB (+1.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 196.9MB | 90.8MB | -106.1MB (-53.9%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 672.9MB | 626.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| codex | 592.3MB | 546.0MB | ok |
| llm-task | 585.6MB | 539.3MB | ok |
| migrate-hermes | 585.4MB | 539.1MB | ok |
| voice-call | 582.6MB | 536.4MB | ok |
| openai | 581.5MB | 535.2MB | ok |
| workboard | 581.4MB | 535.1MB | ok |
| active-memory | 547.6MB | 501.3MB | ok |
| beam | 535.3MB | 489.0MB | ok |
| memory-lancedb | 521.6MB | 475.4MB | ok |
| google | 421.9MB | 375.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 870.4ms | 938.7ms |
| default | cli.main.gateway-run-bootstrap | 635.1ms | 645.6ms |
| default | cli.main.gateway-run-select-environment | 522.5ms | 541.1ms |
| default | sidecars.model-runtime | 432.2ms | 480.4ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 420.7ms | 468.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 625.3ms | 793.4ms |
| skipChannels | cli.main.gateway-run-select-environment | 514.8ms | 543.4ms |
| skipChannels | sidecars.model-runtime | 416.6ms | 423.8ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 405.0ms | 412.4ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 381.9ms | 392.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 610.0ms | 613.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 491.6ms | 495.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 235.3ms | 243.7ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 174.6ms | 192.5ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 158.7ms | 164.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 641.6ms | 770.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 523.5ms | 524.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 238.7ms | 312.2ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 203.0ms | 206.5ms |
| preparedRuntimeScaleOne | worker-environments.runtime-imports | 155.6ms | 167.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1626.1ms | 1689.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1312.1ms | 1322.9ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 952.5ms | 967.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 556.3ms | 578.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 542.7ms | 585.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 602.9ms | 618.4ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 492.5ms | 502.2ms |
| oneInternalHook | sidecars.model-runtime | 384.6ms | 385.3ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 374.4ms | 375.0ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 366.2ms | 366.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 638.4ms | 715.6ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 539.3ms | 539.7ms |
| allInternalHooks | sidecars.model-runtime | 431.8ms | 446.7ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 420.0ms | 434.5ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 410.0ms | 412.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 712.0ms | 726.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 522.7ms | 524.8ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 269.1ms | 279.9ms |
| fiftyPlugins | sidecars.model-runtime | 200.9ms | 204.8ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 188.9ms | 192.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 669.4ms | 690.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 498.8ms | 507.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 265.9ms | 267.2ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 194.3ms | 194.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 179.9ms | 182.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13230.0ms | 0.076 | 1335.9MB | 1356.3MB | 20.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13185.0ms | 0.152 | 1291.2MB | 1361.2MB | 70.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13741.0ms | 0.073 | 1177.6MB | 1359.4MB | 181.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 824.5ms | 824.8ms | 192.5MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 727.6ms | 731.7ms | 192.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 945.3ms | 983.3ms | 192.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 153.9ms |

## Observations

No data.


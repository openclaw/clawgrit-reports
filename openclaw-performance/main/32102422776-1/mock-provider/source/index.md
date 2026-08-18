# OpenClaw Source Performance

Generated: 2026-08-18T05:30:42.135Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 18047.2ms | 20452.9ms | 18047.2ms | 4704.8ms | 17851.7ms | 134.8ms | 1693.6MB | 1.441 |
| skipChannels | gateway, skip channels | 14946.4ms | 15494.0ms | 14946.6ms | 4549.2ms | 3969.3ms | 145.9ms | 1532.3MB | 1.426 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4427.8ms | 5504.6ms | 4427.3ms | 4107.0ms | 3915.8ms | 151.6ms | 1139.5MB | 1.453 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4040.3ms | 4044.1ms | 4040.3ms | 3564.4ms | 3380.1ms | 113.9ms | 1195.5MB | 1.512 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7825.0ms | 8290.3ms | 5860.8ms | 5105.0ms | 4879.4ms | 120.2ms | 1284.9MB | 1.406 |
| oneInternalHook | gateway, one configured internal hook | 14101.7ms | 15002.7ms | 14101.6ms | 4167.5ms | 3729.2ms | 126.5ms | 1553.6MB | 1.441 |
| allInternalHooks | gateway, all internal hooks | 13537.6ms | 14077.0ms | 13531.3ms | 3924.2ms | 3481.7ms | 115.6ms | 1518.4MB | 1.421 |
| fiftyPlugins | gateway, 50 manifest plugins | 4599.6ms | 4637.0ms | 4599.6ms | 3956.3ms | 3669.6ms | 116.7ms | 1218.2MB | 1.510 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4396.6ms | 4443.0ms | 4396.4ms | 3802.1ms | 3620.8ms | 118.6ms | 1213.1MB | 1.379 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1580.9MB | 1693.6MB | +112.6MB (+7.1%) | -99.2MB (-9.3%) | stable |
| gateway boot | skipChannels | 1615.5MB | 1532.3MB | -83.2MB (-5.2%) | -148.6MB (-25.8%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1200.9MB | 1139.5MB | -61.4MB (-5.1%) | -106.7MB (-18.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1088.6MB | 1195.5MB | +106.9MB (+9.8%) | +141.8MB (+31.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1250.0MB | 1284.9MB | +34.9MB (+2.8%) | -3.4MB (-0.5%) | stable |
| gateway boot | oneInternalHook | 1569.0MB | 1553.6MB | -15.5MB (-1.0%) | -152.9MB (-26.6%) | stable |
| gateway boot | allInternalHooks | 1649.4MB | 1518.4MB | -131.0MB (-7.9%) | +25.5MB (+6.1%) | stable |
| gateway boot | fiftyPlugins | 1216.7MB | 1218.2MB | +1.5MB (+0.1%) | +4.9MB (+0.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1171.7MB | 1213.1MB | +41.3MB (+3.5%) | +163.7MB (+38.2%) | stable |
| cli | configGetGatewayPort | 194.9MB | 194.2MB | -0.6MB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 42.8MB | 18.8MB | -24.0MB (-56.0%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 148 bundled plugins | 817.7MB | 771.5MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 596.8MB | 550.6MB | ok |
| opencode | 591.2MB | 545.0MB | ok |
| openai | 587.8MB | 541.6MB | ok |
| policy | 587.4MB | 541.2MB | ok |
| active-memory | 585.6MB | 539.4MB | ok |
| llm-task | 582.5MB | 536.3MB | ok |
| clickclack | 578.9MB | 532.7MB | ok |
| memory-lancedb | 557.6MB | 511.4MB | ok |
| beam | 553.8MB | 507.6MB | ok |
| codex | 541.8MB | 495.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 13505.5ms | 15910.5ms |
| default | sidecars.model-runtime | 12876.4ms | 14674.0ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 12853.4ms | 14641.9ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 12844.5ms | 14630.0ms |
| default | cli.main.gateway-run-bootstrap | 763.2ms | 788.7ms |
| skipChannels | sidecars.model-runtime | 10258.3ms | 10407.6ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 10241.6ms | 10387.7ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 10233.3ms | 10362.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 642.4ms | 909.3ms |
| skipChannels | cli.main.gateway-run-select-environment | 577.4ms | 705.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 769.1ms | 792.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 513.7ms | 709.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 332.5ms | 344.9ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 274.2ms | 378.7ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 193.0ms | 258.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 506.2ms | 564.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 485.1ms | 491.4ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 262.8ms | 265.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 242.6ms | 246.3ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 216.3ms | 251.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1587.1ms | 2109.8ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1287.3ms | 1423.5ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 989.6ms | 1226.9ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 829.6ms | 864.6ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 762.6ms | 806.2ms |
| oneInternalHook | sidecars.model-runtime | 9631.7ms | 10549.6ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 9615.4ms | 10531.8ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 9598.1ms | 10514.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 658.0ms | 686.4ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 524.0ms | 558.2ms |
| allInternalHooks | sidecars.model-runtime | 9226.2ms | 9871.6ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 9210.5ms | 9855.1ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 9201.5ms | 9845.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 569.8ms | 671.7ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 505.6ms | 569.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 562.7ms | 572.9ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 527.1ms | 552.3ms |
| fiftyPlugins | sidecars.model-runtime | 416.7ms | 445.7ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 395.9ms | 424.6ms |
| fiftyPlugins | sidecars.model-runtime-build.runtimePluginMs | 319.6ms | 319.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 560.1ms | 566.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 525.4ms | 531.5ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 419.0ms | 421.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 398.8ms | 399.2ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.runtimePluginMs | 313.3ms | 320.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12972.0ms | 0.077 | 1425.2MB | 1456.7MB | 31.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13159.0ms | 0.076 | 1490.4MB | 1459.3MB | -31.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12852.0ms | 0.078 | 1356.4MB | 1412.5MB | 56.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 622.0ms | 627.9ms | 194.2MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 647.7ms | 660.0ms | 195.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 945.2ms | 954.7ms | 194.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.0ms | 159.7ms |

## Observations

No data.


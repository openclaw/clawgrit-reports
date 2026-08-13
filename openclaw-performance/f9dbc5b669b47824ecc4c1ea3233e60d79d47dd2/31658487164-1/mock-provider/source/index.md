# OpenClaw Source Performance

Generated: 2026-08-13T01:49:00.479Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5377.5ms | 5433.2ms | 5400.3ms | 4508.8ms | 5244.3ms | 144.0ms | 1145.3MB | 1.512 |
| skipChannels | gateway, skip channels | 4846.3ms | 5678.5ms | 4846.3ms | 4097.6ms | 4105.9ms | 145.5ms | 1137.6MB | 1.455 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4321.8ms | 4710.2ms | 4317.3ms | 3912.5ms | 3921.4ms | 137.6ms | 949.5MB | 1.486 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4432.4ms | 5289.4ms | 4432.2ms | 3837.0ms | 3844.0ms | 125.4ms | 951.4MB | 1.443 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7397.0ms | 7745.0ms | 7397.0ms | 5180.6ms | 5187.9ms | 124.1ms | 1041.8MB | 1.420 |
| oneInternalHook | gateway, one configured internal hook | 4487.3ms | 4685.2ms | 4487.3ms | 3711.9ms | 3719.1ms | 133.5ms | 1131.4MB | 1.494 |
| allInternalHooks | gateway, all internal hooks | 4578.6ms | 4874.2ms | 4578.5ms | 3874.3ms | 3880.8ms | 132.8ms | 1150.7MB | 1.436 |
| fiftyPlugins | gateway, 50 manifest plugins | 4343.3ms | 4479.8ms | 4343.1ms | 3846.1ms | 3851.1ms | 129.5ms | 961.1MB | 1.395 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4776.3ms | 4788.1ms | 4776.1ms | 4239.8ms | 4245.7ms | 132.8ms | 960.4MB | 1.466 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1144.2MB | 1145.3MB | +1.1MB (+0.1%) | +14.6MB (+2.0%) | stable |
| gateway boot | skipChannels | 1138.3MB | 1137.6MB | -0.7MB (-0.1%) | -14.4MB (-3.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 940.8MB | 949.5MB | +8.7MB (+0.9%) | +4.4MB (+1.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 960.3MB | 951.4MB | -8.9MB (-0.9%) | +3.3MB (+0.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1128.7MB | 1041.8MB | -86.9MB (-7.7%) | -250.2MB (-35.6%) | stable |
| gateway boot | oneInternalHook | 1188.1MB | 1131.4MB | -56.8MB (-4.8%) | -29.2MB (-6.1%) | stable |
| gateway boot | allInternalHooks | 1130.8MB | 1150.7MB | +19.9MB (+1.8%) | +4.7MB (+1.0%) | stable |
| gateway boot | fiftyPlugins | 1056.7MB | 961.1MB | -95.6MB (-9.0%) | -74.9MB (-14.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 980.5MB | 960.4MB | -20.2MB (-2.1%) | -0.9MB (-0.2%) | stable |
| cli | gatewayHealthJsonConnected | 190.9MB | 190.7MB | -0.1MB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 191.0MB | 191.1MB | +0.2MB (+0.1%) | n/a | stable |
| cli | configGetGatewayPort | 190.8MB | 191.1MB | +0.2MB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 95.1MB | 102.0MB | +7.0MB (+7.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 686.0MB | 639.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| openai | 584.2MB | 537.9MB | ok |
| codex | 582.4MB | 536.1MB | ok |
| voice-call | 577.3MB | 531.1MB | ok |
| llm-task | 575.8MB | 529.5MB | ok |
| active-memory | 547.4MB | 501.2MB | ok |
| migrate-hermes | 535.8MB | 489.6MB | ok |
| memory-lancedb | 535.4MB | 489.2MB | ok |
| workboard | 530.9MB | 484.6MB | ok |
| beam | 513.9MB | 467.7MB | ok |
| microsoft | 420.5MB | 374.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 987.8ms | 996.3ms |
| default | cli.main.gateway-run-bootstrap | 800.0ms | 815.1ms |
| default | cli.main.gateway-run-select-environment | 581.4ms | 638.2ms |
| default | sidecars.model-runtime | 499.1ms | 500.8ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 486.6ms | 486.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 706.5ms | 749.8ms |
| skipChannels | cli.main.gateway-run-select-environment | 557.3ms | 616.2ms |
| skipChannels | sidecars.model-runtime | 442.6ms | 769.2ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 418.1ms | 750.0ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 408.7ms | 710.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 761.4ms | 837.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 573.1ms | 655.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 258.8ms | 326.6ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 195.7ms | 271.6ms |
| preparedRuntimeCatalogStall | gateway.server-start-import | 161.0ms | 162.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 729.4ms | 1033.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 529.0ms | 768.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 274.5ms | 343.6ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 217.8ms | 255.3ms |
| preparedRuntimeScaleOne | cli.bootstrap.config-snapshot | 170.2ms | 226.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1878.3ms | 1915.1ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1432.3ms | 1448.1ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1087.9ms | 1114.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 581.6ms | 631.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 568.4ms | 584.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 628.1ms | 632.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 533.1ms | 554.6ms |
| oneInternalHook | sidecars.model-runtime | 415.2ms | 431.5ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 404.3ms | 419.4ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 395.6ms | 409.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 658.2ms | 667.5ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 541.8ms | 570.3ms |
| allInternalHooks | sidecars.model-runtime | 394.2ms | 450.0ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 383.4ms | 436.3ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 363.8ms | 427.3ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 743.2ms | 754.9ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 544.6ms | 544.8ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 280.7ms | 282.8ms |
| fiftyPlugins | sidecars.model-runtime | 197.1ms | 201.0ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 184.6ms | 188.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 819.4ms | 832.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 594.9ms | 648.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 309.3ms | 326.9ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 214.2ms | 218.1ms |
| fiftyStartupLazyPlugins | gateway.server-start-import | 205.2ms | 225.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13707.0ms | 0.073 | 1159.1MB | 1350.9MB | 191.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 15088.0ms | 0.066 | 1266.8MB | 1323.9MB | 57.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 14331.0ms | 0.140 | 1266.0MB | 1323.1MB | 57.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 834.1ms | 873.9ms | 190.7MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 773.9ms | 843.7ms | 191.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1062.3ms | 1106.2ms | 191.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.3MB | 0.0MB | 0.1ms | 175.7ms |

## Observations

No data.


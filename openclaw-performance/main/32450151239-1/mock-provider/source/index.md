# OpenClaw Source Performance

Generated: 2026-08-21T05:30:52.368Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 15864.4ms | 16498.2ms | 15864.4ms | 4256.2ms | 15698.2ms | 123.0ms | 1982.9MB | 1.394 |
| skipChannels | gateway, skip channels | 13782.0ms | 17278.2ms | 13782.0ms | 4067.3ms | 3636.9ms | 120.8ms | 1370.9MB | 1.389 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4161.9ms | 4189.0ms | 4161.4ms | 3869.4ms | 3676.3ms | 129.6ms | 947.6MB | 1.442 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4322.2ms | 4603.5ms | 4314.7ms | 3861.3ms | 3677.0ms | 114.8ms | 965.6MB | 1.425 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 7874.2ms | 8109.8ms | 7874.1ms | 5850.3ms | 5637.7ms | 129.9ms | 1120.3MB | 1.404 |
| oneInternalHook | gateway, one configured internal hook | 17300.4ms | 18407.4ms | 17300.3ms | 4710.6ms | 4174.5ms | 137.6ms | 1454.6MB | 1.412 |
| allInternalHooks | gateway, all internal hooks | 15744.2ms | 15864.1ms | 4617.5ms | 4493.3ms | 4018.6ms | 132.5ms | 1528.2MB | 1.400 |
| fiftyPlugins | gateway, 50 manifest plugins | 5031.0ms | 5389.0ms | 5030.4ms | 4317.1ms | 4007.2ms | 121.6ms | 1082.3MB | 1.391 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5400.9ms | 5901.5ms | 5400.8ms | 4764.3ms | 4516.0ms | 128.6ms | 1101.2MB | 1.525 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 2923.7MB | 1982.9MB | -940.8MB (-32.2%) | -577.1MB (-35.4%) | improved |
| gateway boot | skipChannels | 1808.0MB | 1370.9MB | -437.2MB (-24.2%) | -116.7MB (-19.9%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 927.5MB | 947.6MB | +20.2MB (+2.2%) | -111.2MB (-18.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1080.1MB | 965.6MB | -114.4MB (-10.6%) | -114.4MB (-18.8%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1118.2MB | 1120.3MB | +2.1MB (+0.2%) | -0.9MB (-0.1%) | stable |
| gateway boot | oneInternalHook | 1824.4MB | 1454.6MB | -369.8MB (-20.3%) | +5.2MB (+0.9%) | improved |
| gateway boot | allInternalHooks | 1819.2MB | 1528.2MB | -291.0MB (-16.0%) | -120.9MB (-20.4%) | improved |
| gateway boot | fiftyPlugins | 1083.1MB | 1082.3MB | -0.8MB (-0.1%) | -4.9MB (-0.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1028.4MB | 1101.2MB | +72.8MB (+7.1%) | +141.0MB (+30.2%) | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 147 bundled plugins | 885.4MB | 839.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 596.6MB | 550.4MB | ok |
| codex | 595.2MB | 549.0MB | ok |
| workboard | 588.8MB | 542.6MB | ok |
| memory-lancedb | 588.6MB | 542.4MB | ok |
| llm-task | 586.1MB | 539.9MB | ok |
| clickclack | 585.4MB | 539.2MB | ok |
| beam | 583.0MB | 536.8MB | ok |
| active-memory | 552.5MB | 506.3MB | ok |
| migrate-hermes | 540.9MB | 494.7MB | ok |
| xai | 537.0MB | 490.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 11881.7ms | 12444.3ms |
| default | sidecars.model-runtime | 11310.2ms | 11850.4ms |
| default | sidecars.model-runtime-build.workspaceFactsMs | 11298.1ms | 11831.1ms |
| default | sidecars.model-runtime-build.runtimePluginMs | 11288.7ms | 11820.9ms |
| default | cli.main.gateway-run-bootstrap | 663.1ms | 753.4ms |
| skipChannels | sidecars.model-runtime | 9529.6ms | 12941.7ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 9518.2ms | 12930.3ms |
| skipChannels | sidecars.model-runtime-build.runtimePluginMs | 9509.6ms | 12913.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 605.2ms | 610.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 536.1ms | 542.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 541.9ms | 589.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 501.3ms | 546.5ms |
| preparedRuntimeCatalogStall | gateway.shutdown-runtime-import | 287.7ms | 298.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 246.1ms | 266.4ms |
| preparedRuntimeCatalogStall | worker-environments.runtime-imports | 208.6ms | 213.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 545.4ms | 548.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 524.0ms | 526.7ms |
| preparedRuntimeScaleOne | gateway.shutdown-runtime-import | 320.2ms | 358.2ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 244.1ms | 261.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 239.5ms | 256.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1983.0ms | 2000.8ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 1561.6ms | 1596.2ms |
| preparedRuntimeScaleMany | cli.bootstrap.state-migration-guard | 1277.6ms | 1293.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 672.8ms | 693.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 360.8ms | 371.7ms |
| oneInternalHook | sidecars.model-runtime | 11981.2ms | 13320.6ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 11965.6ms | 13307.5ms |
| oneInternalHook | sidecars.model-runtime-build.runtimePluginMs | 11953.9ms | 13297.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 710.0ms | 719.5ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 596.0ms | 631.2ms |
| allInternalHooks | sidecars.model-runtime | 10723.0ms | 10825.1ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 10710.4ms | 10812.6ms |
| allInternalHooks | sidecars.model-runtime-build.runtimePluginMs | 10700.6ms | 10794.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 654.6ms | 657.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 578.5ms | 604.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 611.5ms | 727.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 606.8ms | 617.7ms |
| fiftyPlugins | sidecars.model-runtime | 403.3ms | 426.5ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 386.8ms | 407.4ms |
| fiftyPlugins | gateway.shutdown-runtime-import | 310.3ms | 325.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 704.0ms | 829.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 668.4ms | 717.6ms |
| fiftyStartupLazyPlugins | gateway.shutdown-runtime-import | 409.2ms | 413.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 351.1ms | 354.7ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 296.9ms | 301.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12926.0ms | 0.077 | 1251.6MB | 1322.6MB | 70.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13910.0ms | 0.072 | 1203.8MB | 1266.9MB | 63.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13887.0ms | 0.072 | 1205.0MB | 1265.8MB | 60.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 758.9ms | 778.3ms | 203.8MB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 704.8ms | 717.1ms | 204.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1187.0ms | 1207.4ms | 204.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.4MB | 0.0MB | 0.0ms | 163.6ms |

## Observations

No data.


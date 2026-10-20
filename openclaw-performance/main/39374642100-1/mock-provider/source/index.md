# OpenClaw Source Performance

Generated: 2026-10-20T05:34:19.901Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4407.8ms | 4436.1ms | 3191.6ms | 3882.8ms | 4327.2ms | 254.7ms | 1333.3MB | 1.399 |
| skipChannels | gateway, skip channels | 4579.9ms | 4641.2ms | 3339.4ms | 4067.0ms | 4505.8ms | 248.2ms | 1597.2MB | 1.364 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4581.7ms | 4621.5ms | 3438.1ms | 4187.2ms | 4569.0ms | 267.8ms | 1622.0MB | 1.328 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4315.2ms | 4416.8ms | 3180.2ms | 3849.3ms | 4303.4ms | 245.3ms | 1610.0MB | 1.420 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4657.9ms | 5118.4ms | 3286.0ms | 4032.2ms | 4633.1ms | 256.0ms | 1689.6MB | 1.368 |
| oneInternalHook | gateway, one configured internal hook | 4784.3ms | 4849.1ms | 3460.2ms | 4261.5ms | 4723.3ms | 262.6ms | 1594.0MB | 1.463 |
| allInternalHooks | gateway, all internal hooks | 4880.5ms | 4934.5ms | 3516.0ms | 4328.4ms | 4809.7ms | 272.7ms | 1576.0MB | 1.440 |
| fiftyPlugins | gateway, 50 manifest plugins | 13902.9ms | 14073.3ms | 3785.8ms | 13288.9ms | 13885.3ms | 297.2ms | 4082.2MB | 1.439 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4892.0ms | 4959.5ms | 3655.7ms | 4334.8ms | 4874.7ms | 288.9ms | 1320.3MB | 1.472 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1311.1MB | 1333.3MB | +22.2MB (+1.7%) | +1.1MB (+0.3%) | stable |
| gateway boot | skipChannels | 1512.2MB | 1597.2MB | +85.0MB (+5.6%) | -14.9MB (-5.4%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1525.9MB | 1622.0MB | +96.1MB (+6.3%) | +12.2MB (+4.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1509.8MB | 1610.0MB | +100.3MB (+6.6%) | +1.8MB (+0.7%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1566.7MB | 1689.6MB | +122.9MB (+7.8%) | +15.3MB (+6.2%) | stable |
| gateway boot | oneInternalHook | 1542.9MB | 1594.0MB | +51.1MB (+3.3%) | -4.4MB (-1.7%) | stable |
| gateway boot | allInternalHooks | 1556.2MB | 1576.0MB | +19.8MB (+1.3%) | -23.9MB (-8.6%) | stable |
| gateway boot | fiftyPlugins | 4032.3MB | 4082.2MB | +49.9MB (+1.2%) | -23.8MB (-8.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1286.2MB | 1320.3MB | +34.1MB (+2.6%) | -23.5MB (-8.5%) | stable |
| cli | gatewayHealthJsonWarmState | 73.7MiB | 74.9MiB | +1.2MiB (+1.6%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.8MiB | 73.5MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | configGetGatewayPort | 74.0MiB | 73.4MiB | -0.6MiB (-0.8%) | n/a | stable |
| mock hello | gateway RSS delta avg | 447.3MB | 479.1MB | +31.7MB (+7.1%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 171 bundled plugins | 555.2MB | 509.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 384.6MB | 338.4MB | ok |
| workboard | 377.3MB | 331.1MB | ok |
| agentsapi | 358.3MB | 312.0MB | ok |
| muse | 346.9MB | 300.6MB | ok |
| policy | 339.8MB | 293.6MB | ok |
| voice-call | 337.7MB | 291.5MB | ok |
| clickclack | 335.6MB | 289.4MB | ok |
| opencode | 333.4MB | 287.2MB | ok |
| copilot | 329.9MB | 283.7MB | ok |
| minimax | 320.3MB | 274.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4545.1ms | 4592.0ms |
| default | process.bootstrap | 2075.1ms | 2119.4ms |
| default | cli.main.gateway-run-bootstrap | 863.3ms | 869.1ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 863.3ms | 869.1ms |
| default | cli.command.config-ready | 861.8ms | 867.5ms |
| skipChannels | cli.main.gateway-run-parse | 5215.9ms | 5334.6ms |
| skipChannels | process.bootstrap | 2096.4ms | 2154.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 852.5ms | 879.2ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 852.5ms | 879.2ms |
| skipChannels | cli.command.config-ready | 851.3ms | 877.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5392.3ms | 5439.5ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2204.6ms | 2209.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 882.8ms | 908.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 882.8ms | 908.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 881.6ms | 907.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5154.2ms | 5253.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 2045.6ms | 2047.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 821.9ms | 833.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 821.9ms | 833.3ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 820.5ms | 831.8ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5830.7ms | 6258.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 2097.2ms | 2303.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 842.2ms | 980.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 842.2ms | 980.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 840.7ms | 979.5ms |
| oneInternalHook | cli.main.gateway-run-parse | 4971.7ms | 5565.1ms |
| oneInternalHook | process.bootstrap | 2247.0ms | 2261.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 929.2ms | 943.2ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 929.2ms | 943.2ms |
| oneInternalHook | cli.command.config-ready | 928.1ms | 941.6ms |
| allInternalHooks | cli.main.gateway-run-parse | 5569.4ms | 5605.5ms |
| allInternalHooks | process.bootstrap | 2231.1ms | 2233.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 892.1ms | 904.9ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 892.1ms | 904.9ms |
| allInternalHooks | cli.command.config-ready | 890.9ms | 903.4ms |
| fiftyPlugins | cli.main.gateway-run-parse | 14697.0ms | 14821.4ms |
| fiftyPlugins | plugins.runtime-post-bind | 8946.6ms | 9048.7ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 8939.8ms | 9042.7ms |
| fiftyPlugins | process.bootstrap | 2410.8ms | 2444.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 939.4ms | 1025.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4974.2ms | 5095.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2333.3ms | 2393.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 931.4ms | 960.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 931.4ms | 960.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 930.0ms | 958.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10694.0ms | 0.748 | 1619.6MB | 2110.9MB | 491.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10360.0ms | 0.772 | 1659.6MB | 2150.2MB | 490.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10302.0ms | 0.777 | 1659.2MB | 2114.4MB | 455.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 612.7ms | 677.7ms | 74.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 494.7ms | 508.8ms | 73.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 583.3ms | 583.5ms | 73.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 29 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 283.5ms |
| baseline | v2 | smoke | 3.53.3 | 28 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 277.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +11.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.5ms | 1000 | 20 | 1.7ms | -8.4% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +11.4% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.3ms | +33.6% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +16.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +12.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +13.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +4.8% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +5.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 5.3ms | 256 | 20 | 3.5ms | +49.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


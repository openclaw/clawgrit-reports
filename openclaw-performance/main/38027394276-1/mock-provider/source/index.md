# OpenClaw Source Performance

Generated: 2026-10-10T05:35:00.606Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4593.4ms | 4859.6ms | 3923.7ms | 4127.1ms | 4546.8ms | 242.8ms | 1396.9MB | 1.235 |
| skipChannels | gateway, skip channels | 4587.9ms | 4748.1ms | 4082.4ms | 4275.3ms | 4578.7ms | 258.4ms | 1565.9MB | 1.264 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4318.0ms | 4633.6ms | 3871.7ms | 4065.0ms | 4301.3ms | 246.5ms | 1429.3MB | 1.295 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5084.7ms | 6231.1ms | 4504.6ms | 4708.5ms | 5074.0ms | 272.7ms | 1420.3MB | 1.284 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6336.0ms | 6341.7ms | 5422.3ms | 5680.8ms | 6311.9ms | 349.3ms | 1444.9MB | 1.273 |
| oneInternalHook | gateway, one configured internal hook | 6614.8ms | 6651.6ms | 5878.2ms | 6098.9ms | 6595.7ms | 359.9ms | 1490.2MB | 1.279 |
| allInternalHooks | gateway, all internal hooks | 6693.5ms | 6737.2ms | 5785.6ms | 6037.5ms | 6672.1ms | 344.5ms | 1468.1MB | 1.246 |
| fiftyPlugins | gateway, 50 manifest plugins | 6758.1ms | 6799.6ms | 5742.6ms | 6009.7ms | 6738.8ms | 364.7ms | 1461.7MB | 1.332 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5764.1ms | 6090.8ms | 5200.6ms | 5441.7ms | 5747.1ms | 319.1ms | 1401.6MB | 1.228 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1045.0MB | 1396.9MB | +351.9MB (+33.7%) | 0.0MB (0.0%) | watch |
| gateway boot | skipChannels | 1248.8MB | 1565.9MB | +317.1MB (+25.4%) | +2.9MB (+1.3%) | watch |
| gateway boot | preparedRuntimeCatalogStall | 1211.3MB | 1429.3MB | +218.0MB (+18.0%) | +5.7MB (+2.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1227.3MB | 1420.3MB | +193.0MB (+15.7%) | +5.2MB (+2.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1266.7MB | 1444.9MB | +178.3MB (+14.1%) | -52.3MB (-22.2%) | stable |
| gateway boot | oneInternalHook | 1241.2MB | 1490.2MB | +249.0MB (+20.1%) | +6.1MB (+2.7%) | watch |
| gateway boot | allInternalHooks | 1218.8MB | 1468.1MB | +249.4MB (+20.5%) | +6.2MB (+2.7%) | watch |
| gateway boot | fiftyPlugins | 1235.5MB | 1461.7MB | +226.3MB (+18.3%) | +6.7MB (+2.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1239.6MB | 1401.6MB | +162.0MB (+13.1%) | +3.9MB (+1.7%) | stable |
| cli | gatewayHealthJsonWarmState | 73.9MiB | 73.6MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.5MiB | 73.4MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 73.9MiB | 73.4MiB | -0.5MiB (-0.6%) | n/a | stable |
| mock hello | gateway RSS delta avg | 477.4MB | 614.6MB | +137.2MB (+28.7%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 162 bundled plugins | 557.2MB | 510.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 379.1MB | 332.8MB | ok |
| active-memory | 364.2MB | 317.8MB | ok |
| policy | 331.1MB | 284.7MB | ok |
| agentsapi | 330.4MB | 284.0MB | ok |
| canvas | 326.6MB | 280.3MB | ok |
| clickclack | 320.3MB | 273.9MB | ok |
| opencode | 318.8MB | 272.4MB | ok |
| deepinfra | 315.3MB | 268.9MB | ok |
| voice-call | 314.9MB | 268.5MB | ok |
| slack-huddles | 304.9MB | 258.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 1734.7ms | 1779.9ms |
| default | runtime.post-attach | 950.3ms | 1019.3ms |
| default | cli.main.gateway-run-bootstrap | 690.8ms | 699.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 690.8ms | 699.3ms |
| default | cli.command.config-ready | 689.3ms | 698.0ms |
| skipChannels | process.bootstrap | 1755.5ms | 1785.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 690.7ms | 701.2ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 690.7ms | 701.2ms |
| skipChannels | cli.command.config-ready | 689.2ms | 699.7ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 689.2ms | 699.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1760.0ms | 1942.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 690.9ms | 773.1ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 690.9ms | 773.1ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 689.3ms | 771.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 689.3ms | 771.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 1973.2ms | 3070.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 786.5ms | 1213.4ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 786.5ms | 1213.4ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 784.9ms | 1209.4ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 784.9ms | 1209.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 2409.5ms | 2540.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 966.2ms | 998.5ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 966.2ms | 998.5ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 963.4ms | 996.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 963.4ms | 996.3ms |
| oneInternalHook | process.bootstrap | 2456.7ms | 2507.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 929.9ms | 997.2ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 929.9ms | 997.2ms |
| oneInternalHook | cli.command.config-ready | 928.0ms | 994.8ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 928.0ms | 994.8ms |
| allInternalHooks | process.bootstrap | 2484.4ms | 2502.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1005.3ms | 1008.0ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1005.3ms | 1008.0ms |
| allInternalHooks | cli.command.config-ready | 1002.7ms | 1005.2ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1002.7ms | 1005.2ms |
| fiftyPlugins | process.bootstrap | 2425.4ms | 2510.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 976.2ms | 1005.1ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 976.2ms | 1005.1ms |
| fiftyPlugins | cli.command.config-ready | 973.9ms | 1002.4ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 973.9ms | 1002.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2468.0ms | 2531.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1043.4ms | 1162.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1043.4ms | 1162.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1041.3ms | 1156.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1041.3ms | 1156.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12168.0ms | 0.493 | 1676.1MB | 2338.3MB | 662.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11827.0ms | 0.507 | 1837.9MB | 2429.5MB | 591.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11824.0ms | 0.507 | 1821.6MB | 2411.7MB | 590.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 466.3ms | 739.8ms | 73.6MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 448.3ms | 449.3ms | 73.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 839.1ms | 873.6ms | 73.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 20 | 25 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 336.8ms |
| baseline | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 368.8ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -13.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.7ms | 1000 | 20 | 2.0ms | -14.9% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -8.2% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -8.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -17.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -5.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -10.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -23.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -8.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -5.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.2ms | -9.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 2.3ms | 256 | 20 | 4.7ms | -52.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


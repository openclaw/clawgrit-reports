# OpenClaw Source Performance

Generated: 2026-10-27T05:34:23.146Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5377.5ms | 5416.0ms | 3087.3ms | 3746.7ms | 5356.8ms | 232.6ms | 1845.1MB | 1.674 |
| skipChannels | gateway, skip channels | 5281.6ms | 5302.8ms | 3061.5ms | 3785.4ms | 5258.6ms | 233.2ms | 1832.4MB | 1.706 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5038.0ms | 5069.6ms | 3066.5ms | 3620.4ms | 5008.8ms | 232.7ms | 1854.0MB | 1.786 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5485.0ms | 5686.5ms | 3289.6ms | 3878.2ms | 5476.5ms | 244.3ms | 1795.2MB | 1.823 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6814.9ms | 6930.7ms | 3444.8ms | 4117.1ms | 6790.3ms | 256.8ms | 2049.9MB | 2.020 |
| oneInternalHook | gateway, one configured internal hook | 5841.0ms | 5874.7ms | 3392.3ms | 4177.7ms | 5835.0ms | 256.2ms | 1821.6MB | 1.731 |
| allInternalHooks | gateway, all internal hooks | 5526.7ms | 5600.9ms | 3181.5ms | 3924.8ms | 5481.2ms | 252.0ms | 1826.6MB | 1.785 |
| fiftyPlugins | gateway, 50 manifest plugins | 5279.0ms | 5292.3ms | 3081.0ms | 3873.0ms | 5267.4ms | 233.9ms | 1762.4MB | 1.710 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5057.8ms | 5079.6ms | 3087.4ms | 3634.9ms | 5042.0ms | 236.0ms | 1845.9MB | 1.779 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1935.4MB | 1845.1MB | -90.3MB (-4.7%) | -11.4MB (-3.9%) | stable |
| gateway boot | skipChannels | 1936.9MB | 1832.4MB | -104.5MB (-5.4%) | -7.7MB (-3.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1986.3MB | 1854.0MB | -132.3MB (-6.7%) | +17.3MB (+8.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1959.1MB | 1795.2MB | -163.9MB (-8.4%) | +8.6MB (+4.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 2107.1MB | 2049.9MB | -57.2MB (-2.7%) | +14.3MB (+7.1%) | stable |
| gateway boot | oneInternalHook | 1934.5MB | 1821.6MB | -112.9MB (-5.8%) | -1.3MB (-0.6%) | stable |
| gateway boot | allInternalHooks | 1964.2MB | 1826.6MB | -137.6MB (-7.0%) | -1.2MB (-0.5%) | stable |
| gateway boot | fiftyPlugins | 4273.6MB | 1762.4MB | -2511.2MB (-58.8%) | -25.9MB (-10.4%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1943.7MB | 1845.9MB | -97.8MB (-5.0%) | -4.4MB (-1.9%) | stable |
| cli | gatewayHealthJsonWarmState | 67.3MiB | 67.2MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.3MiB | 67.7MiB | +0.4MiB (+0.6%) | n/a | stable |
| cli | configGetGatewayPort | 67.2MiB | 68.0MiB | +0.8MiB (+1.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 232.7MB | 108.6MB | -124.2MB (-53.3%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 175 bundled plugins | 565.8MB | 521.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 405.8MB | 361.3MB | ok |
| active-memory | 384.8MB | 340.4MB | ok |
| knowledge | 383.0MB | 338.5MB | ok |
| workboard | 379.3MB | 334.8MB | ok |
| agentsapi | 340.3MB | 295.9MB | ok |
| muse | 337.3MB | 292.9MB | ok |
| policy | 333.4MB | 288.9MB | ok |
| clickclack | 319.3MB | 274.8MB | ok |
| copilot | 316.2MB | 271.7MB | ok |
| opencode | 307.4MB | 262.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5146.5ms | 5146.7ms |
| default | process.bootstrap | 1984.8ms | 1992.5ms |
| default | sidecars.channels | 1248.0ms | 1255.7ms |
| default | cli.main.gateway-run-bootstrap | 775.3ms | 775.5ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 775.3ms | 775.5ms |
| skipChannels | cli.main.gateway-run-parse | 5047.1ms | 5118.3ms |
| skipChannels | process.bootstrap | 1952.3ms | 1953.3ms |
| skipChannels | sidecars.channels | 1098.0ms | 1111.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 756.6ms | 757.2ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 756.6ms | 757.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4771.6ms | 4826.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1959.6ms | 1999.7ms |
| preparedRuntimeCatalogStall | sidecars.channels | 1061.2ms | 1078.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 757.7ms | 759.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 757.7ms | 759.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5240.4ms | 5388.2ms |
| preparedRuntimeScaleOne | process.bootstrap | 2099.7ms | 2184.0ms |
| preparedRuntimeScaleOne | sidecars.channels | 1136.3ms | 1174.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 822.3ms | 833.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 822.3ms | 833.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6981.6ms | 7186.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 2196.5ms | 2258.1ms |
| preparedRuntimeScaleMany | sidecars.channels | 1704.4ms | 1797.4ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 1159.0ms | 1239.6ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery-scan | 1145.6ms | 1216.5ms |
| oneInternalHook | cli.main.gateway-run-parse | 5554.4ms | 5635.1ms |
| oneInternalHook | process.bootstrap | 2184.1ms | 2189.4ms |
| oneInternalHook | sidecars.channels | 1191.1ms | 1241.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 861.0ms | 879.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 861.0ms | 879.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 5217.7ms | 5360.2ms |
| allInternalHooks | process.bootstrap | 2056.0ms | 2162.8ms |
| allInternalHooks | sidecars.channels | 1093.8ms | 1170.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 784.9ms | 856.1ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 784.9ms | 856.1ms |
| fiftyPlugins | cli.main.gateway-run-parse | 5042.4ms | 5042.8ms |
| fiftyPlugins | process.bootstrap | 1980.2ms | 1983.9ms |
| fiftyPlugins | sidecars.channels | 1042.1ms | 1060.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 774.2ms | 777.2ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 774.2ms | 777.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4815.7ms | 4819.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1985.7ms | 2014.8ms |
| fiftyStartupLazyPlugins | sidecars.channels | 1074.8ms | 1080.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 772.6ms | 795.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 772.6ms | 795.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10934.0ms | 0.274 | 1831.1MB | 2004.2MB | 173.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10938.0ms | 0.274 | 1850.8MB | 2035.3MB | 184.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10568.0ms | 0.284 | 1978.5MB | 1946.6MB | -31.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 515.0ms | 542.9ms | 67.2MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 465.3ms | 490.3ms | 67.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 556.2ms | 575.2ms | 68.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 34 | 37 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 251.4ms |
| baseline | v2 | smoke | 3.53.4 | 33 | 37 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 261.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +22.2% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.5ms | 1000 | 20 | 1.4ms | +0.6% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -1.2% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +4.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | 0.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +10.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +4.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +10.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +2.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.6ms | 2.1ms | 256 | 20 | 2.3ms | -9.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


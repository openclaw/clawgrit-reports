# OpenClaw Source Performance

Generated: 2026-11-28T05:32:09.519Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6306.3ms | 6350.8ms | 4966.8ms | 5796.0ms | 6319.9ms | 524.6ms | 1043.4MB | 1.432 |
| skipChannels | gateway, skip channels | 6407.3ms | 6426.6ms | 4962.1ms | 5962.4ms | 6412.0ms | 525.0ms | 1014.0MB | 1.408 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6332.8ms | 6392.4ms | 4959.4ms | 5934.5ms | 6342.4ms | 528.4ms | 1035.7MB | 1.436 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6490.0ms | 6505.8ms | 5037.6ms | 6064.3ms | 6484.4ms | 534.7ms | 1022.6MB | 1.412 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6560.1ms | 6600.9ms | 4997.8ms | 6048.4ms | 6546.6ms | 522.6ms | 1054.0MB | 1.381 |
| oneInternalHook | gateway, one configured internal hook | 6459.7ms | 6514.2ms | 4935.3ms | 5912.7ms | 6480.1ms | 522.4ms | 1039.4MB | 1.397 |
| allInternalHooks | gateway, all internal hooks | 6618.7ms | 6634.4ms | 5007.2ms | 6008.7ms | 6626.2ms | 534.4ms | 1033.0MB | 1.360 |
| fiftyPlugins | gateway, 50 manifest plugins | 6694.8ms | 6722.7ms | 5002.5ms | 6315.8ms | 6704.1ms | 540.5ms | 1056.4MB | 1.347 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6088.3ms | 6131.6ms | 4988.8ms | 5673.2ms | 6097.6ms | 533.7ms | 1032.6MB | 1.478 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1088.6MB | 1043.4MB | -45.1MB (-4.1%) | -16.9MB (-5.9%) | stable |
| gateway boot | skipChannels | 1063.9MB | 1014.0MB | -50.0MB (-4.7%) | +1.8MB (+0.7%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1074.7MB | 1035.7MB | -39.0MB (-3.6%) | +3.8MB (+1.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1059.1MB | 1022.6MB | -36.5MB (-3.5%) | +3.6MB (+1.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1073.3MB | 1054.0MB | -19.4MB (-1.8%) | -44.3MB (-15.9%) | stable |
| gateway boot | oneInternalHook | 1075.5MB | 1039.4MB | -36.1MB (-3.4%) | +1.5MB (+0.5%) | stable |
| gateway boot | allInternalHooks | 1066.8MB | 1033.0MB | -33.8MB (-3.2%) | +2.4MB (+0.9%) | stable |
| gateway boot | fiftyPlugins | 1072.0MB | 1056.4MB | -15.6MB (-1.5%) | -2.4MB (-1.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1054.7MB | 1032.6MB | -22.1MB (-2.1%) | +3.6MB (+1.3%) | stable |
| cli | gatewayHealthJsonWarmState | 69.3MiB | 69.3MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 69.3MiB | 69.2MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 69.0MiB | 69.0MiB | -0.1MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 327.4MB | 247.1MB | -80.3MB (-24.5%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.8MB | 0.0MB | ok |
| all 185 bundled plugins | 544.5MB | 497.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 339.8MB | 293.0MB | ok |
| knowledge | 336.9MB | 290.1MB | ok |
| agentsapi | 335.2MB | 288.3MB | ok |
| active-memory | 318.2MB | 271.4MB | ok |
| workboard | 317.6MB | 270.8MB | ok |
| opencode | 316.8MB | 270.0MB | ok |
| clickclack | 314.8MB | 268.0MB | ok |
| policy | 313.7MB | 266.9MB | ok |
| copilot | 311.5MB | 264.7MB | ok |
| telegram | 308.0MB | 261.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 6406.7ms | 6442.7ms |
| default | process.bootstrap | 3556.4ms | 3633.5ms |
| default | cli.main.gateway-run-bootstrap | 1736.7ms | 1783.1ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1736.7ms | 1783.1ms |
| default | cli.command.config-ready | 1734.1ms | 1781.2ms |
| skipChannels | cli.main.gateway-run-parse | 6225.6ms | 6260.3ms |
| skipChannels | process.bootstrap | 3539.1ms | 3612.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1734.2ms | 1767.6ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1734.2ms | 1767.6ms |
| skipChannels | cli.command.config-ready | 1731.4ms | 1765.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5737.2ms | 5802.4ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3568.4ms | 3592.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1728.4ms | 1736.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1728.4ms | 1736.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1726.4ms | 1734.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5879.7ms | 5899.8ms |
| preparedRuntimeScaleOne | process.bootstrap | 3599.9ms | 3612.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1745.2ms | 1761.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1745.2ms | 1761.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1743.2ms | 1758.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5965.2ms | 5984.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 3573.7ms | 3642.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1742.0ms | 1804.7ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1742.0ms | 1804.7ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1739.5ms | 1802.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 6238.0ms | 6278.4ms |
| oneInternalHook | process.bootstrap | 3548.9ms | 3560.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1718.7ms | 1738.0ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1718.7ms | 1738.0ms |
| oneInternalHook | cli.command.config-ready | 1716.1ms | 1736.2ms |
| allInternalHooks | cli.main.gateway-run-parse | 6000.2ms | 6019.8ms |
| allInternalHooks | process.bootstrap | 3612.2ms | 3651.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1750.6ms | 1786.1ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1750.6ms | 1786.1ms |
| allInternalHooks | cli.command.config-ready | 1748.7ms | 1784.1ms |
| fiftyPlugins | cli.main.gateway-run-parse | 6240.0ms | 6245.6ms |
| fiftyPlugins | process.bootstrap | 3647.3ms | 3662.1ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1797.0ms | 1799.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1797.0ms | 1799.8ms |
| fiftyPlugins | cli.command.config-ready | 1794.8ms | 1797.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 6007.5ms | 6027.7ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3585.3ms | 3607.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1757.4ms | 1760.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1757.4ms | 1760.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1755.5ms | 1757.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 21561.0ms | 0.325 | 1881.1MB | 2106.8MB | 225.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 21138.0ms | 0.378 | 1859.9MB | 2092.9MB | 233.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 20611.0ms | 0.388 | 1893.2MB | 2175.7MB | 282.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 837.9ms | 876.8ms | 69.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 781.6ms | 803.6ms | 69.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 957.6ms | 1071.2ms | 69.0MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 42 | 45 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 461.1ms |
| baseline | v2 | smoke | 3.53.4 | 42 | 45 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 544.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -12.5% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 2.1ms | 1000 | 20 | 2.2ms | -2.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.6ms | 250 | 20 | 0.6ms | +7.1% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | 696 | 20 | 0.5ms | -1.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | +4.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | +3.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | -1.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.2ms | -0.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | 675 | 20 | 0.5ms | -3.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -2.9% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +5.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.4ms | 4.2ms | 256 | 20 | 4.0ms | +5.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


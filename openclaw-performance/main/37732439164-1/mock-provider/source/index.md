# OpenClaw Source Performance

Generated: 2026-10-08T05:37:18.275Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4955.9ms | 5077.6ms | 4195.8ms | 4436.9ms | 4911.5ms | 247.6ms | 838.5MB | 1.226 |
| skipChannels | gateway, skip channels | 5087.3ms | 5131.6ms | 4500.0ms | 4695.4ms | 5077.9ms | 285.4ms | 1054.9MB | 1.227 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4635.9ms | 4663.2ms | 4223.1ms | 4439.2ms | 4619.8ms | 269.7ms | 851.4MB | 1.313 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4506.4ms | 4638.9ms | 4029.1ms | 4216.6ms | 4498.1ms | 275.8ms | 816.2MB | 1.293 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4805.4ms | 5075.1ms | 4091.6ms | 4316.6ms | 4794.0ms | 285.4ms | 859.5MB | 1.251 |
| oneInternalHook | gateway, one configured internal hook | 5219.6ms | 5245.9ms | 4545.8ms | 4785.5ms | 5202.8ms | 288.3ms | 1083.6MB | 1.159 |
| allInternalHooks | gateway, all internal hooks | 5227.7ms | 5263.0ms | 4592.2ms | 4782.0ms | 5210.4ms | 301.7ms | 1069.7MB | 1.170 |
| fiftyPlugins | gateway, 50 manifest plugins | 4998.9ms | 5223.3ms | 4361.6ms | 4558.9ms | 4985.9ms | 261.5ms | 882.1MB | 1.207 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4736.9ms | 4890.5ms | 4267.6ms | 4507.9ms | 4724.5ms | 271.7ms | 858.0MB | 1.273 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 880.7MB | 838.5MB | -42.1MB (-4.8%) | -27.6MB (-9.1%) | stable |
| gateway boot | skipChannels | 1096.0MB | 1054.9MB | -41.1MB (-3.8%) | -4.4MB (-1.9%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 846.3MB | 851.4MB | +5.0MB (+0.6%) | -4.4MB (-1.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 848.3MB | 816.2MB | -32.1MB (-3.8%) | -4.9MB (-2.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 872.0MB | 859.5MB | -12.4MB (-1.4%) | +9.3MB (+4.2%) | stable |
| gateway boot | oneInternalHook | 1069.5MB | 1083.6MB | +14.0MB (+1.3%) | -2.7MB (-1.2%) | stable |
| gateway boot | allInternalHooks | 1094.3MB | 1069.7MB | -24.6MB (-2.2%) | -2.9MB (-1.3%) | stable |
| gateway boot | fiftyPlugins | 873.9MB | 882.1MB | +8.2MB (+0.9%) | -5.2MB (-2.3%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 846.4MB | 858.0MB | +11.6MB (+1.4%) | -6.0MB (-2.6%) | stable |
| cli | gatewayHealthJsonWarmState | 73.7MiB | 73.3MiB | -0.4MiB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.3MiB | 73.6MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 73.6MiB | 73.5MiB | -0.1MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 584.8MB | 405.3MB | -179.5MB (-30.7%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 162 bundled plugins | 550.8MB | 504.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 376.0MB | 329.7MB | ok |
| active-memory | 375.7MB | 329.4MB | ok |
| agentsapi | 332.3MB | 285.9MB | ok |
| policy | 328.2MB | 281.8MB | ok |
| canvas | 322.2MB | 275.9MB | ok |
| voice-call | 319.3MB | 272.9MB | ok |
| deepinfra | 317.2MB | 270.9MB | ok |
| opencode | 316.3MB | 269.9MB | ok |
| clickclack | 309.6MB | 263.3MB | ok |
| slack-huddles | 300.1MB | 253.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 1813.4ms | 1852.7ms |
| default | runtime.post-attach | 1065.0ms | 1073.9ms |
| default | cli.main.gateway-run-bootstrap | 719.7ms | 738.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 719.7ms | 738.4ms |
| default | cli.command.config-ready | 718.0ms | 736.8ms |
| skipChannels | process.bootstrap | 1945.3ms | 1955.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 766.9ms | 779.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 766.9ms | 779.0ms |
| skipChannels | cli.command.config-ready | 765.0ms | 777.5ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 765.0ms | 777.5ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1859.6ms | 1880.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 710.0ms | 755.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 710.0ms | 755.5ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 708.4ms | 754.2ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 708.4ms | 754.2ms |
| preparedRuntimeScaleOne | process.bootstrap | 1748.5ms | 1858.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 666.7ms | 783.4ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 666.7ms | 783.4ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 665.4ms | 781.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 665.4ms | 781.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 1888.6ms | 1895.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 762.7ms | 764.5ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 762.7ms | 764.5ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 761.2ms | 762.7ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 761.2ms | 762.7ms |
| oneInternalHook | process.bootstrap | 1908.2ms | 1943.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 737.1ms | 746.3ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 737.1ms | 746.3ms |
| oneInternalHook | cli.command.config-ready | 735.6ms | 744.7ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 735.6ms | 744.7ms |
| allInternalHooks | process.bootstrap | 1973.2ms | 2001.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 763.7ms | 788.8ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 763.7ms | 788.8ms |
| allInternalHooks | cli.command.config-ready | 761.5ms | 786.5ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 761.5ms | 786.5ms |
| fiftyPlugins | process.bootstrap | 1850.2ms | 1927.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 744.1ms | 748.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 744.1ms | 748.9ms |
| fiftyPlugins | cli.command.config-ready | 742.7ms | 747.4ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 742.7ms | 747.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1866.6ms | 1950.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 745.1ms | 806.9ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 745.1ms | 806.9ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 743.7ms | 805.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 743.7ms | 805.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13412.0ms | 0.522 | 1589.7MB | 2017.4MB | 427.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14539.0ms | 0.550 | 1648.6MB | 2115.9MB | 467.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 14880.0ms | 0.538 | 1663.5MB | 1984.4MB | 320.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 595.1ms | 644.5ms | 73.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 579.2ms | 682.6ms | 73.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 971.9ms | 997.9ms | 73.5MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 354.9ms |
| baseline | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 317.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +11.1% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.7ms | 1000 | 20 | 1.6ms | +7.3% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +4.0% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +8.9% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +6.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +4.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +11.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +5.9% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +3.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.9ms | 2.5ms | 256 | 20 | 3.2ms | -22.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


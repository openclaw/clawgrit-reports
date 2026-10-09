# OpenClaw Source Performance

Generated: 2026-10-09T05:39:09.760Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5548.3ms | 6917.9ms | 4788.5ms | 5011.5ms | 5487.8ms | 305.0ms | 1045.0MB | 1.267 |
| skipChannels | gateway, skip channels | 5572.2ms | 5638.6ms | 4951.1ms | 5156.3ms | 5558.1ms | 301.8ms | 1248.8MB | 1.256 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4444.6ms | 5015.0ms | 4028.6ms | 4216.2ms | 4434.2ms | 288.8ms | 1211.3MB | 1.196 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5163.6ms | 5602.4ms | 4622.0ms | 4832.8ms | 5149.1ms | 259.4ms | 1227.3MB | 1.249 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4810.6ms | 5143.5ms | 4144.5ms | 4341.3ms | 4801.9ms | 251.9ms | 1266.7MB | 1.247 |
| oneInternalHook | gateway, one configured internal hook | 4725.0ms | 5059.7ms | 4183.9ms | 4385.3ms | 4711.4ms | 254.5ms | 1241.2MB | 1.186 |
| allInternalHooks | gateway, all internal hooks | 4928.0ms | 5186.8ms | 4367.4ms | 4538.6ms | 4914.7ms | 271.8ms | 1218.8MB | 1.234 |
| fiftyPlugins | gateway, 50 manifest plugins | 5446.1ms | 5789.3ms | 4607.3ms | 4827.8ms | 5434.1ms | 291.0ms | 1235.5MB | 1.285 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4860.1ms | 4884.4ms | 4361.9ms | 4567.2ms | 4842.8ms | 289.3ms | 1239.6MB | 1.260 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 838.5MB | 1045.0MB | +206.5MB (+24.6%) | +31.9MB (+11.5%) | watch |
| gateway boot | skipChannels | 1054.9MB | 1248.8MB | +193.9MB (+18.4%) | +5.0MB (+2.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 851.4MB | 1211.3MB | +359.9MB (+42.3%) | +3.8MB (+1.7%) | watch |
| gateway boot | preparedRuntimeScaleOne | 816.2MB | 1227.3MB | +411.0MB (+50.4%) | +2.5MB (+1.1%) | watch |
| gateway boot | preparedRuntimeScaleMany | 859.5MB | 1266.7MB | +407.1MB (+47.4%) | +3.7MB (+1.6%) | watch |
| gateway boot | oneInternalHook | 1083.6MB | 1241.2MB | +157.7MB (+14.5%) | +2.6MB (+1.2%) | stable |
| gateway boot | allInternalHooks | 1069.7MB | 1218.8MB | +149.1MB (+13.9%) | +2.1MB (+0.9%) | stable |
| gateway boot | fiftyPlugins | 882.1MB | 1235.5MB | +353.4MB (+40.1%) | +2.1MB (+0.9%) | watch |
| gateway boot | fiftyStartupLazyPlugins | 858.0MB | 1239.6MB | +381.6MB (+44.5%) | +4.7MB (+2.1%) | watch |
| cli | gatewayHealthJsonWarmState | 73.3MiB | 73.9MiB | +0.5MiB (+0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.6MiB | 73.5MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 73.5MiB | 73.9MiB | +0.3MiB (+0.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 405.3MB | 477.4MB | +72.1MB (+17.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 162 bundled plugins | 553.6MB | 507.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 373.8MB | 327.5MB | ok |
| active-memory | 364.2MB | 318.0MB | ok |
| policy | 332.0MB | 285.8MB | ok |
| canvas | 323.6MB | 277.4MB | ok |
| agentsapi | 322.9MB | 276.6MB | ok |
| deepinfra | 315.9MB | 269.7MB | ok |
| voice-call | 313.9MB | 267.6MB | ok |
| copilot | 309.8MB | 263.6MB | ok |
| clickclack | 309.8MB | 263.5MB | ok |
| zoom-meetings | 307.0MB | 260.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2081.7ms | 3157.3ms |
| default | runtime.post-attach | 1132.4ms | 1135.8ms |
| default | cli.main.gateway-run-bootstrap | 809.7ms | 1279.7ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 809.7ms | 1279.7ms |
| default | cli.command.config-ready | 807.6ms | 1276.9ms |
| skipChannels | process.bootstrap | 2131.6ms | 2133.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 828.8ms | 841.2ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 828.8ms | 841.2ms |
| skipChannels | cli.command.config-ready | 826.9ms | 839.1ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 826.9ms | 839.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1825.8ms | 2067.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 706.4ms | 849.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 706.4ms | 849.5ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 704.8ms | 847.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 704.8ms | 847.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 1863.6ms | 2061.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 714.9ms | 718.3ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 714.9ms | 718.3ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 713.4ms | 716.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 713.4ms | 716.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 1784.3ms | 1808.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 707.5ms | 721.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 707.5ms | 721.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 706.1ms | 720.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 706.1ms | 720.2ms |
| oneInternalHook | process.bootstrap | 1828.6ms | 1833.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 702.9ms | 703.4ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 702.9ms | 703.4ms |
| oneInternalHook | cli.command.config-ready | 701.1ms | 701.9ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 701.1ms | 701.9ms |
| allInternalHooks | process.bootstrap | 1885.3ms | 1992.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 712.5ms | 769.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 712.5ms | 769.5ms |
| allInternalHooks | cli.command.config-ready | 710.7ms | 767.9ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 710.7ms | 767.9ms |
| fiftyPlugins | process.bootstrap | 1996.5ms | 2242.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 821.6ms | 879.6ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 821.6ms | 879.6ms |
| fiftyPlugins | cli.command.config-ready | 820.1ms | 877.5ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 820.1ms | 877.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2018.9ms | 2089.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 869.0ms | 880.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 869.0ms | 880.7ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 867.0ms | 878.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 867.0ms | 878.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13255.0ms | 0.528 | 1744.7MB | 2230.1MB | 485.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14528.0ms | 0.619 | 1823.5MB | 2312.5MB | 489.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13722.0ms | 0.583 | 1852.7MB | 2310.5MB | 457.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 522.2ms | 718.5ms | 73.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 570.8ms | 659.9ms | 73.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 984.4ms | 987.5ms | 73.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 368.8ms |
| baseline | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 354.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +15.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.8ms | 2.0ms | 1000 | 20 | 1.7ms | +14.6% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.5ms | 250 | 20 | 0.4ms | +8.6% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +0.6% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +14.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +9.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +8.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +56.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +7.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +5.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.1ms | +2.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.3ms | 4.7ms | 256 | 20 | 2.5ms | +91.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


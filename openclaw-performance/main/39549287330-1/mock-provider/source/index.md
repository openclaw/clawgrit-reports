# OpenClaw Source Performance

Generated: 2026-10-21T05:34:03.400Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4379.0ms | 4404.1ms | 3152.7ms | 3845.7ms | 4282.0ms | 239.6ms | 1339.7MB | 1.363 |
| skipChannels | gateway, skip channels | 4310.7ms | 4423.7ms | 3083.8ms | 3798.6ms | 4224.2ms | 236.5ms | 1668.9MB | 1.414 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4125.8ms | 4158.0ms | 3068.2ms | 3758.0ms | 4108.0ms | 234.7ms | 1714.9MB | 1.455 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4213.1ms | 4217.3ms | 3046.7ms | 3734.1ms | 4194.9ms | 237.1ms | 1676.7MB | 1.414 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4419.8ms | 4448.1ms | 3095.9ms | 3807.9ms | 4392.8ms | 243.0ms | 1688.9MB | 1.350 |
| oneInternalHook | gateway, one configured internal hook | 4286.9ms | 4299.0ms | 3054.7ms | 3780.1ms | 4208.2ms | 237.4ms | 1641.5MB | 1.402 |
| allInternalHooks | gateway, all internal hooks | 4290.7ms | 4323.7ms | 3064.6ms | 3786.1ms | 4221.4ms | 238.4ms | 1640.4MB | 1.398 |
| fiftyPlugins | gateway, 50 manifest plugins | 11677.6ms | 11799.7ms | 3086.3ms | 11203.5ms | 11663.1ms | 240.7ms | 4201.1MB | 1.376 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4012.5ms | 4053.2ms | 3072.5ms | 3602.0ms | 3994.8ms | 238.4ms | 1381.8MB | 1.237 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1333.3MB | 1339.7MB | +6.4MB (+0.5%) | -24.2MB (-6.9%) | stable |
| gateway boot | skipChannels | 1597.2MB | 1668.9MB | +71.7MB (+4.5%) | +14.0MB (+5.4%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1622.0MB | 1714.9MB | +92.9MB (+5.7%) | -35.2MB (-13.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1610.0MB | 1676.7MB | +66.6MB (+4.1%) | -13.2MB (-5.2%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1689.6MB | 1688.9MB | -0.8MB (-0.0%) | -4.2MB (-1.6%) | stable |
| gateway boot | oneInternalHook | 1594.0MB | 1641.5MB | +47.6MB (+3.0%) | -57.0MB (-21.9%) | stable |
| gateway boot | allInternalHooks | 1576.0MB | 1640.4MB | +64.4MB (+4.1%) | -13.1MB (-5.1%) | stable |
| gateway boot | fiftyPlugins | 4082.2MB | 4201.1MB | +118.9MB (+2.9%) | +7.2MB (+2.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1320.3MB | 1381.8MB | +61.5MB (+4.7%) | +24.9MB (+9.8%) | stable |
| cli | gatewayHealthJsonWarmState | 74.9MiB | 74.4MiB | -0.5MiB (-0.6%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.5MiB | 73.9MiB | +0.3MiB (+0.5%) | n/a | stable |
| cli | configGetGatewayPort | 73.4MiB | 73.7MiB | +0.3MiB (+0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 479.1MB | 557.8MB | +78.7MB (+16.4%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 172 bundled plugins | 557.5MB | 511.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 384.7MB | 338.5MB | ok |
| workboard | 377.0MB | 330.7MB | ok |
| agentsapi | 342.8MB | 296.6MB | ok |
| copilot | 341.5MB | 295.2MB | ok |
| muse | 341.3MB | 295.1MB | ok |
| voice-call | 339.7MB | 293.5MB | ok |
| policy | 339.1MB | 292.8MB | ok |
| opencode | 335.5MB | 289.3MB | ok |
| clickclack | 334.1MB | 287.8MB | ok |
| minimax | 320.6MB | 274.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4538.9ms | 4600.8ms |
| default | process.bootstrap | 1994.2ms | 2032.6ms |
| default | cli.main.gateway-run-bootstrap | 806.0ms | 840.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 806.0ms | 840.3ms |
| default | cli.command.config-ready | 804.9ms | 839.1ms |
| skipChannels | cli.main.gateway-run-parse | 5112.4ms | 5133.6ms |
| skipChannels | process.bootstrap | 1962.2ms | 2058.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 795.3ms | 835.1ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 795.3ms | 835.1ms |
| skipChannels | cli.command.config-ready | 794.3ms | 833.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4957.3ms | 4994.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1955.2ms | 1975.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 796.0ms | 797.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 796.0ms | 797.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 794.9ms | 795.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5045.8ms | 5054.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 1937.1ms | 1949.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 777.0ms | 778.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 777.0ms | 778.6ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 775.9ms | 777.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5554.0ms | 5554.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 1972.8ms | 1982.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 792.2ms | 804.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 792.2ms | 804.6ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 791.1ms | 803.5ms |
| oneInternalHook | cli.main.gateway-run-parse | 5077.9ms | 5084.4ms |
| oneInternalHook | process.bootstrap | 1931.8ms | 1936.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 780.6ms | 782.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 780.6ms | 782.8ms |
| oneInternalHook | cli.command.config-ready | 779.3ms | 781.6ms |
| allInternalHooks | cli.main.gateway-run-parse | 5083.5ms | 5089.8ms |
| allInternalHooks | process.bootstrap | 1957.0ms | 1981.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 797.7ms | 811.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 797.7ms | 811.5ms |
| allInternalHooks | cli.command.config-ready | 796.6ms | 810.4ms |
| fiftyPlugins | cli.main.gateway-run-parse | 12545.3ms | 12673.1ms |
| fiftyPlugins | plugins.runtime-post-bind | 7497.0ms | 7642.8ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 7493.0ms | 7638.1ms |
| fiftyPlugins | process.bootstrap | 1973.5ms | 1997.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 797.7ms | 814.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4119.9ms | 4186.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1973.4ms | 1993.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 797.4ms | 807.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 797.4ms | 807.2ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 796.3ms | 806.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10906.0ms | 0.734 | 1529.9MB | 2137.2MB | 607.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10696.0ms | 0.748 | 1571.1MB | 2102.8MB | 531.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10352.0ms | 0.773 | 1603.3MB | 2137.8MB | 534.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 600.1ms | 720.6ms | 74.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 472.7ms | 488.0ms | 73.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 589.9ms | 624.5ms | 73.7MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 29 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 278.9ms |
| baseline | v2 | smoke | 3.53.3 | 29 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 283.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +5.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.5ms | 1000 | 20 | 1.5ms | +0.2% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -6.8% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -18.9% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -9.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +7.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -5.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -3.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -5.3% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +0.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 4.1ms | 256 | 20 | 5.3ms | -21.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


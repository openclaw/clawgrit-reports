# OpenClaw Source Performance

Generated: 2026-11-04T05:27:06.610Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4985.7ms | 5155.2ms | 3578.7ms | 4319.3ms | 4975.9ms | 509.3ms | 1260.5MB | 1.436 |
| skipChannels | gateway, skip channels | 5322.0ms | 5386.1ms | 3825.9ms | 4678.3ms | 5308.4ms | 540.9ms | 1252.0MB | 1.504 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4834.2ms | 4925.2ms | 3741.3ms | 4386.4ms | 4827.1ms | 520.8ms | 1255.3MB | 1.448 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5114.6ms | 5187.9ms | 3856.1ms | 4511.8ms | 5106.0ms | 548.0ms | 1267.3MB | 1.542 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4994.1ms | 5064.2ms | 3633.4ms | 4248.0ms | 4980.0ms | 520.4ms | 1254.9MB | 1.412 |
| oneInternalHook | gateway, one configured internal hook | 4633.9ms | 4675.2ms | 3357.6ms | 4064.2ms | 4629.7ms | 478.6ms | 1239.7MB | 1.536 |
| allInternalHooks | gateway, all internal hooks | 4425.5ms | 4475.6ms | 3195.4ms | 3887.8ms | 4422.3ms | 456.7ms | 1248.0MB | 1.358 |
| fiftyPlugins | gateway, 50 manifest plugins | 4953.2ms | 5131.4ms | 3635.0ms | 4461.7ms | 4941.4ms | 492.1ms | 1255.6MB | 1.527 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4320.5ms | 4321.1ms | 3330.1ms | 3866.7ms | 4306.1ms | 476.4ms | 1246.8MB | 1.409 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1335.3MB | 1260.5MB | -74.8MB (-5.6%) | -0.4MB (-0.1%) | stable |
| gateway boot | skipChannels | 1306.2MB | 1252.0MB | -54.2MB (-4.2%) | +2.1MB (+1.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1267.4MB | 1255.3MB | -12.0MB (-0.9%) | +0.9MB (+0.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1273.2MB | 1267.3MB | -5.9MB (-0.5%) | +0.8MB (+0.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1315.4MB | 1254.9MB | -60.6MB (-4.6%) | -14.6MB (-5.6%) | stable |
| gateway boot | oneInternalHook | 1295.4MB | 1239.7MB | -55.7MB (-4.3%) | +1.5MB (+0.7%) | stable |
| gateway boot | allInternalHooks | 1271.6MB | 1248.0MB | -23.6MB (-1.9%) | +1.2MB (+0.6%) | stable |
| gateway boot | fiftyPlugins | 1312.5MB | 1255.6MB | -56.9MB (-4.3%) | +1.8MB (+0.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1283.5MB | 1246.8MB | -36.7MB (-2.9%) | +1.4MB (+0.6%) | stable |
| cli | gatewayHealthJsonWarmState | 67.6MiB | 67.4MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.7MiB | 67.3MiB | -0.4MiB (-0.6%) | n/a | stable |
| cli | configGetGatewayPort | 67.4MiB | 67.3MiB | -0.2MiB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -153.5MB | -2.5MB | +151.0MB (-98.4%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 178 bundled plugins | 564.4MB | 520.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 399.0MB | 354.7MB | ok |
| knowledge | 388.0MB | 343.6MB | ok |
| active-memory | 383.7MB | 339.4MB | ok |
| workboard | 377.6MB | 333.3MB | ok |
| agentsapi | 341.7MB | 297.3MB | ok |
| clickclack | 337.5MB | 293.2MB | ok |
| policy | 334.8MB | 290.4MB | ok |
| team-reports | 327.4MB | 283.1MB | ok |
| muse | 326.5MB | 282.1MB | ok |
| admin-http-rpc | 319.0MB | 274.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4810.3ms | 4943.6ms |
| default | process.bootstrap | 2285.2ms | 2393.4ms |
| default | runtime.post-attach | 912.9ms | 932.9ms |
| default | cli.main.gateway-run-bootstrap | 731.8ms | 764.6ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 731.8ms | 764.6ms |
| skipChannels | cli.main.gateway-run-parse | 4792.9ms | 4829.7ms |
| skipChannels | process.bootstrap | 2460.7ms | 2481.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 796.5ms | 798.5ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 796.5ms | 798.5ms |
| skipChannels | cli.command.config-ready | 795.1ms | 797.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4318.6ms | 4382.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2384.5ms | 2469.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 767.3ms | 790.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 767.3ms | 790.6ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 765.9ms | 789.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4551.9ms | 4646.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 2505.1ms | 2511.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 801.6ms | 816.2ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 801.6ms | 816.2ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 800.2ms | 814.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4474.1ms | 4533.1ms |
| preparedRuntimeScaleMany | process.bootstrap | 2354.8ms | 2384.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 763.7ms | 780.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 763.7ms | 780.2ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 762.4ms | 778.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 4163.3ms | 4184.4ms |
| oneInternalHook | process.bootstrap | 2147.9ms | 2150.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 679.8ms | 681.2ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 679.8ms | 681.2ms |
| oneInternalHook | cli.command.config-ready | 678.6ms | 680.0ms |
| allInternalHooks | cli.main.gateway-run-parse | 3969.9ms | 3997.6ms |
| allInternalHooks | process.bootstrap | 2061.5ms | 2105.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 651.9ms | 676.0ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 651.9ms | 676.0ms |
| allInternalHooks | cli.command.config-ready | 650.7ms | 674.7ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4459.3ms | 4714.7ms |
| fiftyPlugins | process.bootstrap | 2248.0ms | 2406.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 706.8ms | 755.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 706.8ms | 755.9ms |
| fiftyPlugins | cli.command.config-ready | 705.6ms | 754.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3832.8ms | 3871.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2175.9ms | 2191.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 706.9ms | 730.5ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 706.9ms | 730.5ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 705.8ms | 729.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11554.0ms | 0.519 | 2061.2MB | 2084.3MB | 23.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12284.0ms | 0.407 | 2132.6MB | 2104.4MB | -28.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12013.0ms | 0.499 | 2049.6MB | 2047.2MB | -2.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 721.8ms | 759.0ms | 67.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 723.8ms | 730.4ms | 67.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 816.2ms | 835.3ms | 67.3MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 352.7ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 253.8ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +36.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.5ms | 3.1ms | 1000 | 20 | 1.4ms | +116.0% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.8ms | 250 | 20 | 0.4ms | +105.7% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.5ms | 696 | 20 | 0.4ms | +25.9% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +13.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +21.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +12.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +82.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.5ms | 0.6ms | 675 | 20 | 0.3ms | +94.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +17.4% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.1ms | +34.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.3ms | 5.6ms | 256 | 20 | 2.1ms | +163.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


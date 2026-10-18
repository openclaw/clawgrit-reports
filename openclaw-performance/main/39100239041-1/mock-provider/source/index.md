# OpenClaw Source Performance

Generated: 2026-10-18T05:31:42.655Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4035.0ms | 4063.7ms | 2897.5ms | 3545.9ms | 3956.6ms | 239.7ms | 1276.1MB | 1.246 |
| skipChannels | gateway, skip channels | 4110.2ms | 4173.7ms | 2953.8ms | 3669.3ms | 4067.8ms | 236.3ms | 1497.8MB | 1.470 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3967.8ms | 4004.3ms | 2945.0ms | 3607.3ms | 3957.2ms | 244.3ms | 1612.0MB | 1.274 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4018.5ms | 4071.8ms | 2900.7ms | 3549.3ms | 4004.5ms | 242.3ms | 1514.3MB | 1.248 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4440.6ms | 4452.5ms | 3083.4ms | 3837.7ms | 4412.4ms | 238.1ms | 1551.7MB | 1.369 |
| oneInternalHook | gateway, one configured internal hook | 4085.7ms | 4093.3ms | 2918.5ms | 3624.7ms | 4036.6ms | 241.9ms | 1496.9MB | 1.469 |
| allInternalHooks | gateway, all internal hooks | 4078.8ms | 4121.7ms | 2917.0ms | 3618.1ms | 4034.1ms | 235.7ms | 1493.8MB | 1.226 |
| fiftyPlugins | gateway, 50 manifest plugins | 11887.7ms | 11891.8ms | 2905.6ms | 11410.4ms | 11873.3ms | 241.6ms | 4166.8MB | 1.348 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3858.3ms | 3891.9ms | 2949.0ms | 3444.1ms | 3846.5ms | 243.7ms | 1519.3MB | 1.296 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1258.9MB | 1276.1MB | +17.2MB (+1.4%) | -15.2MB (-4.5%) | stable |
| gateway boot | skipChannels | 1457.3MB | 1497.8MB | +40.5MB (+2.8%) | -10.0MB (-3.8%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1471.4MB | 1612.0MB | +140.6MB (+9.6%) | +8.0MB (+3.1%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1461.5MB | 1514.3MB | +52.8MB (+3.6%) | -23.0MB (-8.8%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1496.3MB | 1551.7MB | +55.4MB (+3.7%) | +41.4MB (+18.8%) | stable |
| gateway boot | oneInternalHook | 1466.1MB | 1496.9MB | +30.8MB (+2.1%) | -32.4MB (-12.6%) | stable |
| gateway boot | allInternalHooks | 1437.2MB | 1493.8MB | +56.6MB (+3.9%) | -15.2MB (-5.8%) | stable |
| gateway boot | fiftyPlugins | 4462.1MB | 4166.8MB | -295.3MB (-6.6%) | -7.7MB (-2.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1446.7MB | 1519.3MB | +72.6MB (+5.0%) | -17.0MB (-6.5%) | stable |
| cli | gatewayHealthJsonWarmState | 73.9MiB | 74.0MiB | +0.1MiB (+0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.4MiB | 73.9MiB | +0.5MiB (+0.7%) | n/a | stable |
| cli | configGetGatewayPort | 73.4MiB | 73.9MiB | +0.5MiB (+0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | 476.7MB | 453.6MB | -23.1MB (-4.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 169 bundled plugins | 554.8MB | 508.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 379.2MB | 332.8MB | ok |
| workboard | 377.1MB | 330.7MB | ok |
| agentsapi | 355.8MB | 309.4MB | ok |
| policy | 341.1MB | 294.8MB | ok |
| copilot | 335.4MB | 289.0MB | ok |
| muse | 331.2MB | 284.8MB | ok |
| opencode | 328.4MB | 282.1MB | ok |
| voice-call | 325.4MB | 279.0MB | ok |
| deepinfra | 318.8MB | 272.4MB | ok |
| xai | 318.1MB | 271.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4156.3ms | 4171.7ms |
| default | process.bootstrap | 1801.3ms | 1826.8ms |
| default | cli.main.gateway-run-bootstrap | 645.1ms | 665.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 645.1ms | 665.3ms |
| default | cli.command.config-ready | 643.7ms | 664.2ms |
| skipChannels | cli.main.gateway-run-parse | 4857.9ms | 4910.9ms |
| skipChannels | process.bootstrap | 1837.4ms | 1842.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 664.5ms | 672.6ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 664.5ms | 672.6ms |
| skipChannels | cli.command.config-ready | 663.4ms | 671.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4697.1ms | 4725.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1818.0ms | 1837.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 644.2ms | 651.6ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 644.2ms | 651.6ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 643.0ms | 650.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4763.2ms | 4804.2ms |
| preparedRuntimeScaleOne | process.bootstrap | 1800.7ms | 1807.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 629.1ms | 629.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 629.1ms | 629.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 628.1ms | 628.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5484.9ms | 5509.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 1889.7ms | 1901.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 731.8ms | 733.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 731.8ms | 733.3ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 730.7ms | 732.0ms |
| oneInternalHook | cli.main.gateway-run-parse | 4803.6ms | 4851.5ms |
| oneInternalHook | process.bootstrap | 1792.2ms | 1808.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 638.1ms | 644.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 638.1ms | 644.5ms |
| oneInternalHook | cli.command.config-ready | 636.7ms | 643.2ms |
| allInternalHooks | cli.main.gateway-run-parse | 4817.3ms | 4854.6ms |
| allInternalHooks | process.bootstrap | 1804.9ms | 1818.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 642.3ms | 642.3ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 642.3ms | 642.3ms |
| allInternalHooks | cli.command.config-ready | 640.8ms | 641.2ms |
| fiftyPlugins | cli.main.gateway-run-parse | 12716.6ms | 12728.1ms |
| fiftyPlugins | plugins.runtime-post-bind | 7920.4ms | 7930.9ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 7916.4ms | 7926.9ms |
| fiftyPlugins | process.bootstrap | 1812.1ms | 1835.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 660.2ms | 676.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4590.0ms | 4617.7ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1831.2ms | 1849.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 664.2ms | 665.8ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 664.2ms | 665.8ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 663.1ms | 664.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9850.0ms | 0.812 | 1572.9MB | 2052.0MB | 479.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10018.0ms | 0.799 | 1566.6MB | 2016.3MB | 449.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9890.0ms | 0.809 | 1566.9MB | 1999.0MB | 432.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 520.6ms | 531.7ms | 74.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 483.9ms | 502.2ms | 73.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 575.9ms | 590.9ms | 73.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 27 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 273.4ms |
| baseline | v2 | smoke | 3.53.3 | 26 | 28 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 256.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -16.7% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.4ms | 1000 | 20 | 1.3ms | +7.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +2.6% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -12.5% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -9.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -8.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +6.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +5.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +6.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +10.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +2.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 3.1ms | 256 | 20 | 4.5ms | -31.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


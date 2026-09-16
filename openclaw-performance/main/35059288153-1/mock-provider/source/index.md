# OpenClaw Source Performance

Generated: 2026-09-16T05:32:56.222Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4176.4ms | 4637.4ms | 4024.8ms | 3755.2ms | 4120.0ms | 137.6ms | 617.1MB | 1.078 |
| skipChannels | gateway, skip channels | 4364.1ms | 4645.9ms | 4257.9ms | 4006.6ms | 3758.5ms | 163.8ms | 618.0MB | 1.146 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3937.2ms | 4100.0ms | 3838.5ms | 3583.8ms | 3430.5ms | 133.9ms | 591.0MB | 1.025 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4624.6ms | 4654.5ms | 4467.0ms | 4092.8ms | 3939.7ms | 142.2ms | 593.0MB | 1.164 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5404.3ms | 5477.6ms | 5094.0ms | 4347.3ms | 4179.5ms | 145.2ms | 636.5MB | 1.148 |
| oneInternalHook | gateway, one configured internal hook | 4564.7ms | 4855.8ms | 4426.0ms | 4142.6ms | 3845.9ms | 137.5ms | 617.6MB | 1.121 |
| allInternalHooks | gateway, all internal hooks | 5020.6ms | 5693.2ms | 4941.7ms | 4552.6ms | 4299.8ms | 160.5ms | 617.9MB | 1.195 |
| fiftyPlugins | gateway, 50 manifest plugins | 5931.5ms | 6399.6ms | 5823.5ms | 4714.1ms | 4447.2ms | 154.2ms | 614.0MB | 1.094 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4373.9ms | 4665.8ms | 4248.4ms | 3992.0ms | 3834.9ms | 156.5ms | 618.6MB | 1.168 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 614.7MB | 617.1MB | +2.3MB (+0.4%) | -6.8MB (-2.5%) | stable |
| gateway boot | skipChannels | 621.0MB | 618.0MB | -2.9MB (-0.5%) | +39.7MB (+16.9%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 606.4MB | 591.0MB | -15.4MB (-2.5%) | -7.0MB (-2.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 609.6MB | 593.0MB | -16.5MB (-2.7%) | -6.3MB (-2.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 677.2MB | 636.5MB | -40.8MB (-6.0%) | +30.2MB (+12.7%) | stable |
| gateway boot | oneInternalHook | 612.5MB | 617.6MB | +5.2MB (+0.8%) | +7.9MB (+3.6%) | stable |
| gateway boot | allInternalHooks | 630.8MB | 617.9MB | -12.9MB (-2.0%) | +5.3MB (+2.3%) | stable |
| gateway boot | fiftyPlugins | 640.0MB | 614.0MB | -26.0MB (-4.1%) | -3.2MB (-1.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 621.0MB | 618.6MB | -2.4MB (-0.4%) | +27.8MB (+11.9%) | stable |
| cli | gatewayHealthJsonWarmState | 71.2MiB | 70.4MiB | -0.8MiB (-1.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 70.8MiB | 70.5MiB | -0.3MiB (-0.4%) | n/a | stable |
| cli | configGetGatewayPort | 70.7MiB | 70.8MiB | +0.1MiB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 193.8MB | 198.8MB | +5.0MB (+2.6%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.4MB | 0.0MB | ok |
| all 152 bundled plugins | 530.2MB | 483.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 347.6MB | 301.2MB | ok |
| llm-task | 340.0MB | 293.6MB | ok |
| active-memory | 338.1MB | 291.8MB | ok |
| workboard | 332.9MB | 286.5MB | ok |
| discord | 330.6MB | 284.3MB | ok |
| copilot | 324.2MB | 277.9MB | ok |
| clickclack | 320.4MB | 274.0MB | ok |
| deepinfra | 274.1MB | 227.7MB | ok |
| policy | 270.4MB | 224.0MB | ok |
| canvas | 266.4MB | 220.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2763.7ms | 3041.2ms |
| default | cli.main.gateway-run-bootstrap | 1832.5ms | 2094.0ms |
| default | runtime.post-attach | 594.8ms | 609.5ms |
| default | cli.main.gateway-run-select-environment | 344.0ms | 352.2ms |
| default | gateway.request-runtime | 227.2ms | 227.7ms |
| skipChannels | process.bootstrap | 2849.6ms | 2907.4ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1782.8ms | 1981.9ms |
| skipChannels | cli.main.gateway-run-select-environment | 331.1ms | 413.7ms |
| skipChannels | gateway.request-runtime | 205.4ms | 281.1ms |
| skipChannels | plugins.runtime-post-bind | 166.1ms | 253.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2550.8ms | 2804.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1704.1ms | 1772.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 306.0ms | 411.0ms |
| preparedRuntimeCatalogStall | gateway.request-runtime | 224.1ms | 231.7ms |
| preparedRuntimeCatalogStall | gateway.kernel-state | 147.6ms | 179.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 3004.1ms | 3064.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2081.3ms | 2129.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 333.2ms | 360.0ms |
| preparedRuntimeScaleOne | gateway.request-runtime | 191.0ms | 219.6ms |
| preparedRuntimeScaleOne | gateway.kernel-state | 168.9ms | 205.3ms |
| preparedRuntimeScaleMany | process.bootstrap | 3226.7ms | 3288.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2275.3ms | 2303.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 341.3ms | 392.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 328.6ms | 337.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 318.1ms | 348.5ms |
| oneInternalHook | process.bootstrap | 2849.7ms | 3180.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1897.8ms | 2185.5ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 345.7ms | 358.9ms |
| oneInternalHook | gateway.request-runtime | 231.8ms | 246.3ms |
| oneInternalHook | plugins.runtime-post-bind | 190.4ms | 200.4ms |
| allInternalHooks | process.bootstrap | 3376.4ms | 3476.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2352.4ms | 2377.7ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 331.9ms | 412.2ms |
| allInternalHooks | gateway.request-runtime | 296.2ms | 297.8ms |
| allInternalHooks | plugins.runtime-post-bind | 254.2ms | 256.5ms |
| fiftyPlugins | process.bootstrap | 3325.3ms | 3720.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2227.7ms | 2570.8ms |
| fiftyPlugins | sidecars.reply-runtime | 584.6ms | 665.7ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 359.1ms | 421.8ms |
| fiftyPlugins | sidecars.plugin-services | 345.9ms | 413.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2988.4ms | 3248.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2030.3ms | 2250.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 338.4ms | 349.2ms |
| fiftyStartupLazyPlugins | gateway.request-runtime | 204.1ms | 248.3ms |
| fiftyStartupLazyPlugins | gateway.kernel-state | 149.8ms | 159.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12072.0ms | 0.166 | 1060.1MB | 1269.3MB | 209.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 14287.0ms | 0.140 | 1085.9MB | 1272.2MB | 186.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13995.0ms | 0.143 | 1076.4MB | 1277.3MB | 201.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 722.0ms | 755.7ms | 70.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 674.6ms | 842.7ms | 70.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1619.6ms | 1622.9ms | 70.8MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 354.7ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 20 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 210.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +58.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.0ms | 2.9ms | 1000 | 20 | 1.7ms | +67.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.7ms | 250 | 20 | 0.5ms | +51.2% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.6ms | 696 | 20 | 0.3ms | +84.6% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +65.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +83.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +46.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +82.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.5ms | 0.6ms | 675 | 20 | 0.3ms | +108.1% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +106.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.5ms | 256 | 20 | 0.2ms | +162.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.2ms | +44.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


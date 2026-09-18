# OpenClaw Source Performance

Generated: 2026-09-18T05:29:35.843Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4456.2ms | 4489.8ms | 4309.5ms | 4100.1ms | 4398.3ms | 149.6ms | 659.1MB | 1.122 |
| skipChannels | gateway, skip channels | 3559.9ms | 3713.4ms | 3420.4ms | 3290.6ms | 3068.0ms | 123.3ms | 637.3MB | 1.131 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3602.8ms | 3758.2ms | 3447.7ms | 3407.0ms | 3316.5ms | 138.6ms | 641.6MB | 1.110 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3680.2ms | 4137.9ms | 3528.7ms | 3374.9ms | 3287.2ms | 137.8ms | 612.9MB | 1.087 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4019.9ms | 4195.3ms | 3622.3ms | 3571.9ms | 3476.1ms | 127.4ms | 630.0MB | 1.074 |
| oneInternalHook | gateway, one configured internal hook | 3674.5ms | 4278.5ms | 3645.3ms | 3417.0ms | 3212.4ms | 134.4ms | 639.9MB | 1.089 |
| allInternalHooks | gateway, all internal hooks | 3736.4ms | 3872.5ms | 3736.4ms | 3447.4ms | 3224.5ms | 129.3ms | 638.0MB | 1.089 |
| fiftyPlugins | gateway, 50 manifest plugins | 4142.6ms | 4507.5ms | 3957.6ms | 3479.9ms | 3279.9ms | 132.7ms | 643.6MB | 1.109 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3693.8ms | 3833.6ms | 3540.6ms | 3474.8ms | 3378.4ms | 123.5ms | 662.1MB | 1.083 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 630.6MB | 659.1MB | +28.6MB (+4.5%) | +5.3MB (+1.9%) | stable |
| gateway boot | skipChannels | 633.6MB | 637.3MB | +3.8MB (+0.6%) | -12.0MB (-5.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 620.3MB | 641.6MB | +21.3MB (+3.4%) | +76.1MB (+33.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 616.0MB | 612.9MB | -3.1MB (-0.5%) | -15.1MB (-6.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 626.0MB | 630.0MB | +4.0MB (+0.6%) | 0.0MB (0.0%) | stable |
| gateway boot | oneInternalHook | 646.5MB | 639.9MB | -6.5MB (-1.0%) | +16.6MB (+7.4%) | stable |
| gateway boot | allInternalHooks | 637.8MB | 638.0MB | +0.2MB (+0.0%) | -13.6MB (-5.7%) | stable |
| gateway boot | fiftyPlugins | 639.6MB | 643.6MB | +4.0MB (+0.6%) | +52.4MB (+21.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 624.0MB | 662.1MB | +38.2MB (+6.1%) | +58.8MB (+24.5%) | stable |
| cli | gatewayHealthJsonWarmState | 72.5MiB | 70.9MiB | -1.6MiB (-2.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 71.9MiB | 70.6MiB | -1.3MiB (-1.8%) | n/a | stable |
| cli | configGetGatewayPort | 70.9MiB | 70.6MiB | -0.3MiB (-0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 256.8MB | 266.6MB | +9.9MB (+3.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 153 bundled plugins | 561.4MB | 515.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 348.4MB | 302.2MB | ok |
| workboard | 347.3MB | 301.1MB | ok |
| migrate-hermes | 345.8MB | 299.6MB | ok |
| active-memory | 339.6MB | 293.3MB | ok |
| discord | 326.0MB | 279.8MB | ok |
| copilot | 324.7MB | 278.5MB | ok |
| deepinfra | 317.0MB | 270.8MB | ok |
| policy | 286.0MB | 239.7MB | ok |
| canvas | 284.2MB | 237.9MB | ok |
| opencode | 275.6MB | 229.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2698.8ms | 3019.5ms |
| default | cli.main.gateway-run-bootstrap | 1770.6ms | 2031.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1770.6ms | 2031.3ms |
| default | cli.command.config-ready | 1769.8ms | 2029.8ms |
| default | process.bootstrap.cli.command.config-ready | 1769.8ms | 2029.8ms |
| skipChannels | process.bootstrap | 2302.3ms | 2488.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1532.6ms | 1642.7ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1532.6ms | 1642.7ms |
| skipChannels | cli.command.config-ready | 1531.6ms | 1641.7ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1531.6ms | 1641.7ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2504.0ms | 2585.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1633.6ms | 1668.9ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1633.6ms | 1668.9ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1632.9ms | 1668.1ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1632.9ms | 1668.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 2460.6ms | 2853.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1636.0ms | 1869.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1636.0ms | 1869.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1635.2ms | 1868.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1635.2ms | 1868.9ms |
| preparedRuntimeScaleMany | process.bootstrap | 2645.4ms | 2821.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1838.4ms | 1954.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1838.4ms | 1954.6ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1837.5ms | 1953.5ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1837.5ms | 1953.5ms |
| oneInternalHook | process.bootstrap | 2435.4ms | 2962.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1630.6ms | 1981.0ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1630.6ms | 1981.0ms |
| oneInternalHook | cli.command.config-ready | 1629.6ms | 1980.0ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1629.6ms | 1980.0ms |
| allInternalHooks | process.bootstrap | 2426.1ms | 2503.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1615.4ms | 1667.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1615.4ms | 1667.4ms |
| allInternalHooks | cli.command.config-ready | 1614.3ms | 1666.3ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1614.3ms | 1666.3ms |
| fiftyPlugins | process.bootstrap | 2488.4ms | 2678.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1662.0ms | 1779.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1662.0ms | 1779.8ms |
| fiftyPlugins | cli.command.config-ready | 1661.0ms | 1778.8ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1661.0ms | 1778.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2528.8ms | 2723.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1690.0ms | 1852.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1690.0ms | 1852.3ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1688.9ms | 1851.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1688.9ms | 1851.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10829.0ms | 0.185 | 1000.6MB | 1276.0MB | 275.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10378.0ms | 0.193 | 1010.6MB | 1273.9MB | 263.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9923.0ms | 0.202 | 1018.1MB | 1279.2MB | 261.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 408.5ms | 411.5ms | 70.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 412.0ms | 417.8ms | 70.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 749.6ms | 806.9ms | 70.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 225.4ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 277.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -47.2% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.7ms | 1.8ms | 1000 | 20 | 2.1ms | -15.3% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.6ms | -20.0% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.4ms | 696 | 20 | 0.4ms | -10.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -12.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -11.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -22.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -17.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.4ms | -14.0% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -32.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.3ms | -7.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.3ms | -11.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


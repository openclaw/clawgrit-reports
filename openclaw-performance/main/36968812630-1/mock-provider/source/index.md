# OpenClaw Source Performance

Generated: 2026-10-02T05:33:55.746Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4656.9ms | 4722.0ms | 4182.1ms | 4170.0ms | 4615.9ms | 230.0ms | 788.7MB | 1.074 |
| skipChannels | gateway, skip channels | 4706.9ms | 4723.9ms | 4357.7ms | 4338.9ms | 4698.0ms | 222.2ms | 957.2MB | 1.114 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4313.7ms | 4353.9ms | 4087.7ms | 4053.6ms | 4306.4ms | 221.2ms | 749.8MB | 1.202 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4492.1ms | 4552.1ms | 4168.8ms | 4136.2ms | 4484.3ms | 221.3ms | 755.0MB | 1.124 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4548.7ms | 4675.4ms | 4111.7ms | 4083.7ms | 4541.0ms | 212.6ms | 774.8MB | 1.104 |
| oneInternalHook | gateway, one configured internal hook | 4398.6ms | 5515.5ms | 4071.5ms | 4056.6ms | 4387.6ms | 213.1ms | 946.7MB | 1.172 |
| allInternalHooks | gateway, all internal hooks | 4363.6ms | 4489.2ms | 4004.8ms | 3979.5ms | 4358.7ms | 220.0ms | 980.5MB | 1.190 |
| fiftyPlugins | gateway, 50 manifest plugins | 4641.5ms | 4890.7ms | 4154.3ms | 4126.1ms | 4633.7ms | 214.6ms | 775.8MB | 1.227 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4248.5ms | 4335.2ms | 4032.1ms | 4000.5ms | 4243.0ms | 214.1ms | 749.8MB | 1.205 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 778.5MB | 788.7MB | +10.2MB (+1.3%) | -7.4MB (-2.4%) | stable |
| gateway boot | skipChannels | 927.5MB | 957.2MB | +29.7MB (+3.2%) | +3.4MB (+1.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 747.5MB | 749.8MB | +2.3MB (+0.3%) | -12.0MB (-5.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 744.8MB | 755.0MB | +10.1MB (+1.4%) | +2.1MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 753.3MB | 774.8MB | +21.5MB (+2.9%) | -4.3MB (-1.8%) | stable |
| gateway boot | oneInternalHook | 928.4MB | 946.7MB | +18.3MB (+2.0%) | +4.4MB (+2.0%) | stable |
| gateway boot | allInternalHooks | 920.5MB | 980.5MB | +60.0MB (+6.5%) | +11.4MB (+5.1%) | stable |
| gateway boot | fiftyPlugins | 756.6MB | 775.8MB | +19.2MB (+2.5%) | +2.3MB (+1.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 749.7MB | 749.8MB | +0.1MB (+0.0%) | -5.4MB (-2.4%) | stable |
| cli | gatewayHealthJsonWarmState | 74.2MiB | 73.1MiB | -1.1MiB (-1.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.7MiB | 73.5MiB | -0.2MiB (-0.3%) | n/a | stable |
| cli | configGetGatewayPort | 73.7MiB | 73.2MiB | -0.6MiB (-0.8%) | n/a | stable |
| mock hello | gateway RSS delta avg | 526.0MB | 462.7MB | -63.4MB (-12.0%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 161 bundled plugins | 572.3MB | 526.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 361.4MB | 315.0MB | ok |
| active-memory | 356.8MB | 310.5MB | ok |
| discord | 324.6MB | 278.2MB | ok |
| agentsapi | 319.9MB | 273.6MB | ok |
| deepinfra | 315.1MB | 268.8MB | ok |
| policy | 313.7MB | 267.4MB | ok |
| voice-call | 313.2MB | 266.9MB | ok |
| lmstudio | 311.1MB | 264.8MB | ok |
| amazon-bedrock-mantle | 310.2MB | 263.8MB | ok |
| zai | 309.1MB | 262.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2728.7ms | 2773.5ms |
| default | cli.main.gateway-run-bootstrap | 1757.6ms | 1760.0ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1757.6ms | 1760.0ms |
| default | cli.command.config-ready | 1757.1ms | 1759.5ms |
| default | process.bootstrap.cli.command.config-ready | 1757.1ms | 1759.5ms |
| skipChannels | process.bootstrap | 2715.0ms | 2755.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1735.9ms | 1758.5ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1735.9ms | 1758.5ms |
| skipChannels | cli.command.config-ready | 1735.4ms | 1757.9ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1735.4ms | 1757.9ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2631.8ms | 2728.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1652.5ms | 1758.1ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1652.5ms | 1758.1ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1652.0ms | 1757.5ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1652.0ms | 1757.5ms |
| preparedRuntimeScaleOne | process.bootstrap | 2728.2ms | 2765.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1739.5ms | 1760.2ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1739.5ms | 1760.2ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1739.0ms | 1759.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1739.0ms | 1759.7ms |
| preparedRuntimeScaleMany | process.bootstrap | 2700.8ms | 2810.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 1762.8ms | 1819.6ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 1762.8ms | 1819.6ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 1762.3ms | 1819.1ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 1762.3ms | 1819.1ms |
| oneInternalHook | process.bootstrap | 2578.9ms | 3674.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 1662.6ms | 2470.2ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 1662.6ms | 2470.2ms |
| oneInternalHook | cli.command.config-ready | 1662.1ms | 2469.5ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 1662.1ms | 2469.5ms |
| allInternalHooks | process.bootstrap | 2513.8ms | 2627.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1598.3ms | 1687.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1598.3ms | 1687.6ms |
| allInternalHooks | cli.command.config-ready | 1597.8ms | 1687.1ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1597.8ms | 1687.1ms |
| fiftyPlugins | process.bootstrap | 2644.6ms | 2794.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 1716.9ms | 1824.2ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1716.9ms | 1824.2ms |
| fiftyPlugins | cli.command.config-ready | 1716.4ms | 1823.6ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 1716.4ms | 1823.6ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2666.2ms | 2746.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1698.8ms | 1758.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1698.8ms | 1758.7ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1698.3ms | 1758.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1698.3ms | 1758.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11951.0ms | 0.418 | 1306.6MB | 1756.8MB | 450.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12270.0ms | 0.407 | 1299.3MB | 1749.9MB | 450.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12503.0ms | 0.400 | 1300.9MB | 1788.0MB | 487.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 502.6ms | 505.6ms | 73.1MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 489.5ms | 528.1ms | 73.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 791.5ms | 797.9ms | 73.2MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 333.8ms |
| baseline | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 638.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -56.5% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 2.2ms | 1000 | 20 | 4.6ms | -52.1% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.9ms | -54.6% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.7ms | -54.5% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -57.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.3ms | -53.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -51.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -47.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.6ms | -51.8% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -63.4% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.3ms | -51.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.9ms | 4.0ms | 256 | 20 | 8.7ms | -54.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


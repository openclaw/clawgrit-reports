# OpenClaw Source Performance

Generated: 2026-10-30T05:28:01.129Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4427.4ms | 4450.8ms | 2974.6ms | 3936.6ms | 4424.4ms | 432.8ms | 1270.0MB | 1.359 |
| skipChannels | gateway, skip channels | 4426.6ms | 4437.9ms | 2941.1ms | 3966.7ms | 4418.6ms | 426.3ms | 1257.8MB | 1.368 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4198.0ms | 4243.2ms | 2948.4ms | 3816.0ms | 4177.3ms | 428.9ms | 1249.6MB | 1.429 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4252.3ms | 4279.8ms | 2911.6ms | 3789.7ms | 4246.3ms | 421.1ms | 1257.6MB | 1.416 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4480.6ms | 4507.7ms | 2972.2ms | 3867.5ms | 4477.3ms | 424.1ms | 1259.2MB | 1.339 |
| oneInternalHook | gateway, one configured internal hook | 4469.7ms | 4506.6ms | 2967.3ms | 3980.0ms | 4444.5ms | 427.9ms | 1271.7MB | 1.361 |
| allInternalHooks | gateway, all internal hooks | 4446.5ms | 4451.4ms | 2960.0ms | 3967.7ms | 4433.1ms | 424.7ms | 1257.4MB | 1.355 |
| fiftyPlugins | gateway, 50 manifest plugins | 4438.3ms | 4445.1ms | 2970.7ms | 4060.0ms | 4434.8ms | 429.9ms | 1259.7MB | 1.360 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4226.3ms | 4229.7ms | 2974.3ms | 3837.5ms | 4209.0ms | 424.6ms | 1226.5MB | 1.420 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1251.1MB | 1270.0MB | +18.9MB (+1.5%) | -30.9MB (-9.4%) | stable |
| gateway boot | skipChannels | 1252.2MB | 1257.8MB | +5.6MB (+0.4%) | -7.8MB (-3.1%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1240.8MB | 1249.6MB | +8.9MB (+0.7%) | +2.3MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1248.1MB | 1257.6MB | +9.5MB (+0.8%) | +7.2MB (+3.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1253.5MB | 1259.2MB | +5.7MB (+0.5%) | +0.3MB (+0.1%) | stable |
| gateway boot | oneInternalHook | 1226.6MB | 1271.7MB | +45.2MB (+3.7%) | +8.6MB (+3.5%) | stable |
| gateway boot | allInternalHooks | 1258.8MB | 1257.4MB | -1.4MB (-0.1%) | -15.3MB (-6.0%) | stable |
| gateway boot | fiftyPlugins | 1243.0MB | 1259.7MB | +16.7MB (+1.3%) | -1.7MB (-0.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1239.4MB | 1226.5MB | -12.9MB (-1.0%) | +9.3MB (+3.8%) | stable |
| cli | gatewayHealthJsonWarmState | 67.9MiB | 67.5MiB | -0.5MiB (-0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.6MiB | 67.6MiB | +0.0MiB (+0.0%) | n/a | stable |
| cli | configGetGatewayPort | 67.4MiB | 67.1MiB | -0.3MiB (-0.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 32.8MB | -76.0MB | -108.8MB (-331.7%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 176 bundled plugins | 572.2MB | 527.7MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 402.1MB | 357.6MB | ok |
| knowledge | 387.4MB | 342.9MB | ok |
| active-memory | 384.7MB | 340.2MB | ok |
| workboard | 374.1MB | 329.6MB | ok |
| agentsapi | 340.3MB | 295.8MB | ok |
| muse | 337.1MB | 292.6MB | ok |
| policy | 334.1MB | 289.6MB | ok |
| clickclack | 333.6MB | 289.1MB | ok |
| deepinfra | 319.8MB | 275.3MB | ok |
| admin-http-rpc | 318.8MB | 274.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4278.8ms | 4301.6ms |
| default | process.bootstrap | 1966.9ms | 2000.2ms |
| default | runtime.post-attach | 1096.6ms | 1116.9ms |
| default | plugins.runtime-post-bind | 706.8ms | 716.9ms |
| default | cli.main.gateway-run-bootstrap | 677.4ms | 701.9ms |
| skipChannels | cli.main.gateway-run-parse | 4033.4ms | 4039.0ms |
| skipChannels | process.bootstrap | 1964.0ms | 1964.9ms |
| skipChannels | plugins.runtime-post-bind | 725.4ms | 747.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 671.6ms | 677.6ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 671.6ms | 677.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 3779.9ms | 3818.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1962.5ms | 2000.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 661.9ms | 665.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 661.9ms | 665.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 660.9ms | 664.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 3864.2ms | 3868.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 1935.3ms | 1948.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 653.8ms | 655.5ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 653.8ms | 655.5ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 652.7ms | 654.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4081.1ms | 4096.2ms |
| preparedRuntimeScaleMany | process.bootstrap | 1988.4ms | 2018.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 693.3ms | 693.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 693.3ms | 693.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 692.2ms | 692.7ms |
| oneInternalHook | cli.main.gateway-run-parse | 4066.5ms | 4099.1ms |
| oneInternalHook | process.bootstrap | 1962.9ms | 1965.0ms |
| oneInternalHook | plugins.runtime-post-bind | 730.6ms | 751.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 662.9ms | 668.9ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 662.9ms | 668.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 4062.5ms | 4065.1ms |
| allInternalHooks | process.bootstrap | 1961.3ms | 1964.3ms |
| allInternalHooks | plugins.runtime-post-bind | 727.8ms | 730.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 665.7ms | 677.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 665.7ms | 677.6ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4077.2ms | 4101.6ms |
| fiftyPlugins | process.bootstrap | 1993.4ms | 1994.5ms |
| fiftyPlugins | plugins.runtime-post-bind | 795.6ms | 800.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 696.4ms | 699.6ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 696.4ms | 699.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3799.3ms | 3803.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1970.0ms | 1986.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 683.7ms | 691.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 683.7ms | 691.7ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 682.6ms | 690.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10303.0ms | 0.194 | 2297.6MB | 2214.4MB | -83.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10324.0ms | 0.194 | 2286.3MB | 2204.6MB | -81.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10257.0ms | 0.195 | 2267.4MB | 2204.3MB | -63.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 580.5ms | 593.8ms | 67.5MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 555.9ms | 557.2ms | 67.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 613.8ms | 614.9ms | 67.1MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 36 | 38 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 247.3ms |
| baseline | v2 | smoke | 3.53.4 | 36 | 38 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 287.4ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +11.1% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.5ms | 1000 | 20 | 1.6ms | -6.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.5ms | +9.4% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -13.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -10.3% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -14.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -9.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -26.9% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.2ms | -8.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.6ms | 2.0ms | 256 | 20 | 2.2ms | -9.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


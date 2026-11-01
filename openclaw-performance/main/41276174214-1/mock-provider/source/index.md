# OpenClaw Source Performance

Generated: 2026-11-01T05:24:11.577Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4159.4ms | 4164.5ms | 3003.2ms | 3587.7ms | 4141.5ms | 426.1ms | 1328.3MB | 1.449 |
| skipChannels | gateway, skip channels | 4161.0ms | 4161.4ms | 3009.6ms | 3652.4ms | 4136.9ms | 427.9ms | 1312.4MB | 1.450 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3913.1ms | 3918.4ms | 3000.9ms | 3510.3ms | 3905.6ms | 427.7ms | 1283.6MB | 1.286 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4019.3ms | 4027.2ms | 2988.6ms | 3512.6ms | 4007.7ms | 430.2ms | 1274.3MB | 1.246 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4286.9ms | 4309.1ms | 3055.3ms | 3610.2ms | 4267.8ms | 429.9ms | 1303.4MB | 1.407 |
| oneInternalHook | gateway, one configured internal hook | 4168.4ms | 4197.3ms | 2983.0ms | 3646.6ms | 4158.2ms | 425.0ms | 1305.2MB | 1.439 |
| allInternalHooks | gateway, all internal hooks | 4181.2ms | 4208.0ms | 2994.7ms | 3649.1ms | 4165.9ms | 427.2ms | 1322.9MB | 1.440 |
| fiftyPlugins | gateway, 50 manifest plugins | 4158.7ms | 4184.6ms | 3018.0ms | 3733.0ms | 4150.7ms | 429.6ms | 1308.5MB | 1.448 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3937.2ms | 3941.2ms | 3018.4ms | 3505.5ms | 3917.6ms | 423.8ms | 1272.1MB | 1.277 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1281.7MB | 1328.3MB | +46.5MB (+3.6%) | +22.1MB (+7.4%) | stable |
| gateway boot | skipChannels | 1263.6MB | 1312.4MB | +48.8MB (+3.9%) | -38.7MB (-15.4%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1274.8MB | 1283.6MB | +8.8MB (+0.7%) | -27.5MB (-11.6%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1272.6MB | 1274.3MB | +1.8MB (+0.1%) | -42.0MB (-16.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1279.4MB | 1303.4MB | +23.9MB (+1.9%) | -13.8MB (-5.1%) | stable |
| gateway boot | oneInternalHook | 1279.0MB | 1305.2MB | +26.2MB (+2.0%) | +20.1MB (+8.4%) | stable |
| gateway boot | allInternalHooks | 1261.3MB | 1322.9MB | +61.7MB (+4.9%) | -38.5MB (-15.3%) | stable |
| gateway boot | fiftyPlugins | 1272.2MB | 1308.5MB | +36.3MB (+2.9%) | -27.8MB (-11.5%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1283.9MB | 1272.1MB | -11.8MB (-0.9%) | -27.8MB (-11.5%) | stable |
| cli | gatewayHealthJsonWarmState | 67.8MiB | 67.3MiB | -0.4MiB (-0.7%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.6MiB | 67.4MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 67.3MiB | 67.4MiB | +0.1MiB (+0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 18.1MB | -5.5MB | -23.5MB (-130.1%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 178 bundled plugins | 580.5MB | 536.2MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 415.3MB | 370.9MB | ok |
| knowledge | 388.9MB | 344.6MB | ok |
| active-memory | 386.5MB | 342.1MB | ok |
| workboard | 376.8MB | 332.4MB | ok |
| agentsapi | 341.7MB | 297.4MB | ok |
| muse | 337.1MB | 292.8MB | ok |
| policy | 335.6MB | 291.2MB | ok |
| admin-http-rpc | 319.8MB | 275.5MB | ok |
| clickclack | 317.8MB | 273.5MB | ok |
| copilot | 316.2MB | 271.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 3974.5ms | 3987.5ms |
| default | process.bootstrap | 1958.0ms | 1973.8ms |
| default | runtime.post-attach | 753.3ms | 756.1ms |
| default | cli.main.gateway-run-bootstrap | 619.5ms | 636.0ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 619.5ms | 636.0ms |
| skipChannels | cli.main.gateway-run-parse | 3728.1ms | 3745.4ms |
| skipChannels | process.bootstrap | 1980.1ms | 1980.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 625.7ms | 648.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 625.7ms | 648.8ms |
| skipChannels | cli.command.config-ready | 624.7ms | 647.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 3490.6ms | 3496.3ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1957.6ms | 1959.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 616.8ms | 619.7ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 616.8ms | 619.7ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 615.7ms | 618.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 3597.3ms | 3607.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 1957.3ms | 1974.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 619.8ms | 621.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 619.8ms | 621.9ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 618.8ms | 620.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 3858.4ms | 3880.8ms |
| preparedRuntimeScaleMany | process.bootstrap | 1994.3ms | 2001.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 647.6ms | 647.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 647.6ms | 647.8ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 646.6ms | 646.7ms |
| oneInternalHook | cli.main.gateway-run-parse | 3741.4ms | 3766.8ms |
| oneInternalHook | process.bootstrap | 1965.5ms | 1986.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 621.4ms | 635.4ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 621.4ms | 635.4ms |
| oneInternalHook | cli.command.config-ready | 620.4ms | 634.3ms |
| allInternalHooks | cli.main.gateway-run-parse | 3755.7ms | 3783.6ms |
| allInternalHooks | process.bootstrap | 1960.0ms | 1967.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 618.8ms | 624.9ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 618.8ms | 624.9ms |
| allInternalHooks | cli.command.config-ready | 617.8ms | 623.8ms |
| fiftyPlugins | cli.main.gateway-run-parse | 3773.0ms | 3782.3ms |
| fiftyPlugins | process.bootstrap | 1974.5ms | 1988.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 635.1ms | 638.3ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 635.1ms | 638.3ms |
| fiftyPlugins | cli.command.config-ready | 634.0ms | 637.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3510.4ms | 3520.5ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1974.7ms | 1979.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 637.9ms | 641.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 637.9ms | 641.3ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 636.8ms | 640.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9813.0ms | 0.408 | 2109.5MB | 2101.7MB | -7.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9816.0ms | 0.407 | 2090.9MB | 2108.8MB | 17.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9836.0ms | 0.305 | 2137.2MB | 2110.7MB | -26.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 575.4ms | 620.7ms | 67.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 578.2ms | 605.4ms | 67.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 629.7ms | 630.3ms | 67.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 38 | 39 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 250.2ms |
| baseline | v2 | smoke | 3.53.4 | 36 | 39 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 276.5ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -14.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.5ms | 1000 | 20 | 1.5ms | -1.0% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -4.9% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +2.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -1.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +3.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +3.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | -4.8% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.6ms | 2.0ms | 256 | 20 | 2.1ms | -6.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


# OpenClaw Source Performance

Generated: 2026-11-10T05:26:18.079Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4148.5ms | 4148.6ms | 3011.6ms | 3683.1ms | 4126.6ms | 433.1ms | 1215.9MB | 1.208 |
| skipChannels | gateway, skip channels | 4206.9ms | 4241.1ms | 3070.0ms | 3799.1ms | 4203.2ms | 430.4ms | 1193.5MB | 1.426 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3948.6ms | 3954.9ms | 3011.5ms | 3575.9ms | 3925.8ms | 425.9ms | 1164.8MB | 1.273 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3932.4ms | 3942.3ms | 3006.5ms | 3570.4ms | 3925.7ms | 428.8ms | 1161.6MB | 1.279 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4085.3ms | 4096.9ms | 3061.2ms | 3673.6ms | 4065.4ms | 425.2ms | 1168.0MB | 1.240 |
| oneInternalHook | gateway, one configured internal hook | 4200.5ms | 4207.3ms | 3039.3ms | 3771.5ms | 4192.3ms | 430.3ms | 1195.0MB | 1.426 |
| allInternalHooks | gateway, all internal hooks | 4165.2ms | 4165.5ms | 3013.1ms | 3729.4ms | 4161.3ms | 430.5ms | 1210.6MB | 1.201 |
| fiftyPlugins | gateway, 50 manifest plugins | 4222.4ms | 4226.8ms | 3040.9ms | 3846.5ms | 4218.3ms | 431.6ms | 1193.2MB | 1.421 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3955.6ms | 4001.8ms | 3013.3ms | 3574.2ms | 3950.9ms | 428.3ms | 1166.2MB | 1.264 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1340.0MB | 1215.9MB | -124.1MB (-9.3%) | -56.5MB (-16.7%) | stable |
| gateway boot | skipChannels | 1323.9MB | 1193.5MB | -130.4MB (-9.8%) | -36.4MB (-14.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1299.0MB | 1164.8MB | -134.3MB (-10.3%) | -13.1MB (-5.4%) | improved |
| gateway boot | preparedRuntimeScaleOne | 1308.5MB | 1161.6MB | -146.9MB (-11.2%) | -28.1MB (-11.6%) | improved |
| gateway boot | preparedRuntimeScaleMany | 1295.8MB | 1168.0MB | -127.8MB (-9.9%) | -14.5MB (-5.5%) | stable |
| gateway boot | oneInternalHook | 1335.9MB | 1195.0MB | -140.9MB (-10.6%) | -16.9MB (-7.3%) | improved |
| gateway boot | allInternalHooks | 1331.5MB | 1210.6MB | -120.9MB (-9.1%) | -16.7MB (-7.2%) | stable |
| gateway boot | fiftyPlugins | 1342.2MB | 1193.2MB | -149.0MB (-11.1%) | -19.5MB (-8.8%) | improved |
| gateway boot | fiftyStartupLazyPlugins | 1280.9MB | 1166.2MB | -114.7MB (-9.0%) | -8.1MB (-3.6%) | stable |
| cli | gatewayHealthJsonWarmState | 68.5MiB | 67.4MiB | -1.0MiB (-1.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.2MiB | 67.3MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | configGetGatewayPort | 67.3MiB | 67.3MiB | -0.1MiB (-0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 29.3MB | -87.3MB | -116.6MB (-397.7%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.4MB | 0.0MB | ok |
| all 181 bundled plugins | 554.3MB | 510.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 372.9MB | 328.5MB | ok |
| knowledge | 357.9MB | 313.5MB | ok |
| workboard | 346.4MB | 302.1MB | ok |
| clickclack | 342.5MB | 298.2MB | ok |
| agentsapi | 339.4MB | 295.1MB | ok |
| active-memory | 334.0MB | 289.6MB | ok |
| policy | 332.5MB | 288.1MB | ok |
| muse | 316.9MB | 272.6MB | ok |
| opencode | 315.0MB | 270.6MB | ok |
| copilot | 313.5MB | 269.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 3943.2ms | 3946.3ms |
| default | process.bootstrap | 1991.5ms | 1995.4ms |
| default | runtime.post-attach | 728.3ms | 732.2ms |
| default | cli.main.gateway-run-bootstrap | 681.6ms | 685.3ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 681.6ms | 685.3ms |
| skipChannels | cli.main.gateway-run-parse | 3763.6ms | 3800.6ms |
| skipChannels | process.bootstrap | 2021.4ms | 2038.0ms |
| skipChannels | cli.main.gateway-run-bootstrap | 690.6ms | 714.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 690.6ms | 714.8ms |
| skipChannels | cli.command.config-ready | 689.5ms | 711.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 3504.3ms | 3513.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1974.7ms | 1985.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 668.8ms | 672.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 668.8ms | 672.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 667.6ms | 671.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 3488.6ms | 3498.6ms |
| preparedRuntimeScaleOne | process.bootstrap | 1978.0ms | 1999.0ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 674.4ms | 688.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 674.4ms | 688.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 673.4ms | 687.7ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 3637.1ms | 3642.6ms |
| preparedRuntimeScaleMany | process.bootstrap | 2007.0ms | 2024.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 707.2ms | 709.4ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 707.2ms | 709.4ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 706.0ms | 708.3ms |
| oneInternalHook | cli.main.gateway-run-parse | 3760.7ms | 3763.0ms |
| oneInternalHook | process.bootstrap | 2007.1ms | 2010.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 685.9ms | 687.6ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 685.9ms | 687.6ms |
| oneInternalHook | cli.command.config-ready | 684.7ms | 686.5ms |
| allInternalHooks | cli.main.gateway-run-parse | 3722.2ms | 3727.1ms |
| allInternalHooks | process.bootstrap | 1991.0ms | 1998.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 685.5ms | 686.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 685.5ms | 686.6ms |
| allInternalHooks | cli.command.config-ready | 684.5ms | 685.5ms |
| fiftyPlugins | cli.main.gateway-run-parse | 3805.5ms | 3811.0ms |
| fiftyPlugins | process.bootstrap | 2023.3ms | 2038.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 706.6ms | 706.6ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 706.6ms | 706.6ms |
| fiftyPlugins | cli.command.config-ready | 705.5ms | 705.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 3515.1ms | 3535.2ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1996.0ms | 2055.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 694.5ms | 722.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 694.5ms | 722.7ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 693.3ms | 721.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10104.0ms | 0.297 | 1958.3MB | 1850.3MB | -108.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10143.0ms | 0.197 | 1963.8MB | 1860.7MB | -103.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10104.0ms | 0.297 | 1935.5MB | 1884.6MB | -50.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 577.0ms | 577.4ms | 67.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 559.8ms | 566.1ms | 67.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 629.2ms | 632.3ms | 67.3MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 41 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 260.7ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 41 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 299.0ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -10.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.4ms | 1000 | 20 | 1.7ms | -15.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -13.4% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | -11.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -25.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -8.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -11.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -9.6% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -11.3% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -4.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | -1.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 2.8ms | 256 | 20 | 3.7ms | -23.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.


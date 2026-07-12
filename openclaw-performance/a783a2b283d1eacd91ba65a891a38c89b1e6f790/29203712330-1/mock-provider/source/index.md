# OpenClaw Source Performance

Generated: 2026-07-12T18:27:41.209Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4498.2ms | 4772.0ms | 4495.0ms | 4351.3ms | 4426.8ms | 33.1ms | 837.1MB | 1.257 |
| skipChannels | gateway, skip channels | 4360.0ms | 4555.1ms | 4359.6ms | 4294.4ms | 4330.3ms | 36.8ms | 811.3MB | 1.244 |
| oneInternalHook | gateway, one configured internal hook | 3887.9ms | 3962.2ms | 3886.6ms | 3821.9ms | 3855.0ms | 29.8ms | 816.0MB | 1.262 |
| allInternalHooks | gateway, all internal hooks | 4397.8ms | 4751.1ms | 4397.5ms | 4343.8ms | 4374.7ms | 32.5ms | 830.8MB | 1.263 |
| fiftyPlugins | gateway, 50 manifest plugins | 4160.7ms | 4898.7ms | 4160.1ms | 4017.7ms | 4078.1ms | 38.0ms | 787.3MB | 1.225 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3911.5ms | 4100.2ms | 3910.8ms | 3782.5ms | 3857.0ms | 34.1ms | 758.2MB | 1.333 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 445.5MB | 402.3MB | ok |
| xai | 436.8MB | 393.7MB | ok |
| migrate-hermes | 423.3MB | 380.2MB | ok |
| active-memory | 412.4MB | 369.3MB | ok |
| llm-task | 406.0MB | 362.9MB | ok |
| openai | 383.6MB | 340.4MB | ok |
| voice-call | 371.0MB | 327.9MB | ok |
| google | 366.6MB | 323.5MB | ok |
| minimax | 359.6MB | 316.5MB | ok |
| vydra | 317.9MB | 274.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3357.5ms | 3402.8ms |
| default | cli.main.gateway-run-bootstrap | 2714.0ms | 2827.7ms |
| default | post-attach.update-sentinel.total | 956.5ms | 1060.2ms |
| default | sidecars.restart-sentinel.total | 955.9ms | 1059.4ms |
| default | sidecars.session-locks.total | 955.1ms | 1058.6ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3200.4ms | 3356.2ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2578.4ms | 2727.1ms |
| skipChannels | sidecars.plugin-services.total | 1066.1ms | 1066.1ms |
| skipChannels | sidecars.plugin-services.phone-control.phone-control-expiry.total | 1064.5ms | 1064.5ms |
| skipChannels | sidecars.plugin-services.device-pair.device-pair-notifier.total | 1063.4ms | 1063.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2876.8ms | 2963.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2348.1ms | 2391.3ms |
| oneInternalHook | sidecars.subagent-recovery.total | 981.5ms | 981.5ms |
| oneInternalHook | sidecars.ready.total | 976.5ms | 976.5ms |
| oneInternalHook | sidecars.total.total | 974.1ms | 974.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3204.1ms | 3457.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2646.4ms | 2738.9ms |
| allInternalHooks | post-attach.update-check.total | 914.5ms | 929.7ms |
| allInternalHooks | ready.total | 902.3ms | 919.9ms |
| allInternalHooks | runtime.post-attach.total | 900.5ms | 918.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3174.3ms | 3434.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2536.9ms | 2858.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 809.0ms | 1163.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 806.0ms | 1162.6ms |
| fiftyPlugins | sidecars.session-locks.total | 805.1ms | 1161.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3167.1ms | 3316.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2555.9ms | 2697.2ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 747.9ms | 754.5ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 613.7ms | 618.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 611.1ms | 618.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9011.0ms | 0.111 | 812.7MB | 841.4MB | 28.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8228.0ms | 0.122 | 766.6MB | 838.2MB | 71.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8285.0ms | 0.121 | 803.1MB | 829.5MB | 26.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2903.2ms | 2960.6ms | 56.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 631.2ms | 656.6ms | 56.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.2MB | 0.0MB | 0.1ms | 46.8ms |

## Observations

No data.


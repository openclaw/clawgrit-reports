# OpenClaw Source Performance

Generated: 2026-07-13T23:41:35.596Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3479.7ms | 3507.5ms | 3471.0ms | 3247.3ms | 3331.7ms | 46.8ms | 759.6MB | 1.470 |
| skipChannels | gateway, skip channels | 3139.3ms | 3224.1ms | 3138.8ms | 3057.8ms | 3107.4ms | 45.2ms | 757.9MB | 1.551 |
| oneInternalHook | gateway, one configured internal hook | 4501.5ms | 4624.0ms | 4501.4ms | 4423.4ms | 4467.5ms | 46.2ms | 872.7MB | 1.422 |
| allInternalHooks | gateway, all internal hooks | 4378.1ms | 4496.0ms | 4377.9ms | 4292.7ms | 4345.3ms | 43.8ms | 821.1MB | 1.418 |
| fiftyPlugins | gateway, 50 manifest plugins | 5003.2ms | 5173.5ms | 5003.3ms | 4545.7ms | 4631.4ms | 43.5ms | 928.3MB | 1.399 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4882.9ms | 4993.5ms | 4882.5ms | 4383.2ms | 4466.3ms | 50.0ms | 923.9MB | 1.402 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 575.3MB | 528.7MB | ok |
| qa-lab | 550.8MB | 504.2MB | ok |
| xai | 517.8MB | 471.2MB | ok |
| llm-task | 516.1MB | 469.5MB | ok |
| codex | 515.7MB | 469.1MB | ok |
| active-memory | 511.0MB | 464.4MB | ok |
| anthropic | 510.2MB | 463.6MB | ok |
| openai | 428.4MB | 381.8MB | ok |
| google | 428.0MB | 381.4MB | ok |
| lmstudio | 423.6MB | 377.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 917.4ms | 946.8ms |
| default | post-attach.update-sentinel.total | 891.7ms | 989.0ms |
| default | sidecars.restart-sentinel.total | 890.7ms | 988.3ms |
| default | sidecars.session-locks.total | 887.3ms | 987.4ms |
| default | post-ready.agent-runtime-plugins.total | 885.1ms | 985.2ms |
| skipChannels | post-attach.update-sentinel.total | 879.0ms | 891.6ms |
| skipChannels | sidecars.restart-sentinel.total | 878.2ms | 890.8ms |
| skipChannels | sidecars.session-locks.total | 877.2ms | 889.5ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 867.0ms | 903.4ms |
| skipChannels | sidecars.subagent-recovery.total | 858.6ms | 871.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3621.4ms | 3702.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2887.7ms | 2949.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2854.1ms | 2915.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2853.1ms | 2914.6ms |
| oneInternalHook | memory.ready.rssMb | 855.3ms | 866.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3497.0ms | 3577.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2760.9ms | 2886.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2731.2ms | 2855.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2730.3ms | 2854.3ms |
| allInternalHooks | memory.ready.rssMb | 819.4ms | 819.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3417.7ms | 3438.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2668.7ms | 2702.9ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2637.3ms | 2672.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2636.1ms | 2671.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1166.9ms | 1292.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3576.8ms | 3584.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2759.1ms | 2785.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2723.5ms | 2753.0ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2722.5ms | 2751.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 968.0ms | 1043.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10182.0ms | 0.000 | 2355.1MB | 855.0MB | -1500.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9830.0ms | 0.102 | 874.1MB | 900.8MB | 26.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10475.0ms | 0.191 | 902.2MB | 956.2MB | 54.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4623.4ms | 5820.6ms | 62.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1133.6ms | 1351.6ms | 62.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 56.8ms |

## Observations

No data.


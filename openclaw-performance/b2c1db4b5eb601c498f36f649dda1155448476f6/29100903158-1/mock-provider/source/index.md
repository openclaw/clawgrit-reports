# OpenClaw Source Performance

Generated: 2026-07-10T14:57:51.885Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4527.3ms | 4537.6ms | 4526.2ms | 4352.9ms | 4449.0ms | 37.7ms | 830.7MB | 1.328 |
| skipChannels | gateway, skip channels | 4391.1ms | 4571.9ms | 4387.0ms | 4310.5ms | 4351.9ms | 42.0ms | 802.9MB | 1.312 |
| oneInternalHook | gateway, one configured internal hook | 4492.7ms | 4638.8ms | 4492.3ms | 4329.7ms | 4429.5ms | 40.2ms | 808.8MB | 1.293 |
| allInternalHooks | gateway, all internal hooks | 4732.1ms | 5020.1ms | 4731.8ms | 4655.6ms | 4696.3ms | 44.2ms | 840.2MB | 1.268 |
| fiftyPlugins | gateway, 50 manifest plugins | 4522.5ms | 4865.3ms | 4522.0ms | 4430.5ms | 4499.8ms | 39.8ms | 755.2MB | 1.233 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4636.4ms | 5261.7ms | 4634.7ms | 4479.8ms | 4564.7ms | 45.2ms | 787.5MB | 1.330 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 461.2MB | 418.1MB | ok |
| xai | 436.0MB | 392.9MB | ok |
| llm-task | 422.2MB | 379.1MB | ok |
| migrate-hermes | 422.2MB | 379.1MB | ok |
| active-memory | 400.9MB | 357.8MB | ok |
| openai | 389.6MB | 346.6MB | ok |
| voice-call | 372.0MB | 328.9MB | ok |
| google | 358.7MB | 315.6MB | ok |
| minimax | 355.5MB | 312.4MB | ok |
| xiaomi | 316.3MB | 273.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3247.9ms | 3280.5ms |
| default | cli.main.gateway-run-bootstrap | 2652.1ms | 2671.8ms |
| default | post-attach.update-sentinel.total | 987.4ms | 995.8ms |
| default | sidecars.restart-sentinel.total | 986.8ms | 995.1ms |
| default | sidecars.session-locks.total | 986.0ms | 994.3ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3208.5ms | 3226.1ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2590.5ms | 2604.3ms |
| skipChannels | post-attach.update-sentinel.total | 1072.9ms | 1126.2ms |
| skipChannels | sidecars.restart-sentinel.total | 1072.2ms | 1125.3ms |
| skipChannels | sidecars.session-locks.total | 1071.3ms | 1123.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3196.9ms | 3289.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2591.6ms | 2671.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 1161.8ms | 1180.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1161.2ms | 1179.7ms |
| oneInternalHook | sidecars.session-locks.total | 1160.3ms | 1178.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3489.8ms | 3506.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2821.5ms | 2838.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 1416.9ms | 1416.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 1416.1ms | 1416.1ms |
| allInternalHooks | sidecars.session-locks.total | 1415.0ms | 1415.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3502.3ms | 3673.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2887.7ms | 2913.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 827.6ms | 902.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 826.9ms | 901.3ms |
| fiftyPlugins | sidecars.session-locks.total | 826.1ms | 900.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3753.7ms | 4270.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2943.8ms | 3516.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 753.9ms | 809.8ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 751.0ms | 765.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 687.0ms | 695.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9486.0ms | 0.105 | 791.6MB | 823.2MB | 31.6MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8373.0ms | 0.119 | 783.0MB | 811.7MB | 28.7MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 8370.0ms | 0.119 | 759.6MB | 785.4MB | 25.8MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2940.4ms | 2962.1ms | 57.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 655.7ms | 741.4ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.1MB | 0.0MB | 0.1ms | 45.4ms |

## Observations

No data.


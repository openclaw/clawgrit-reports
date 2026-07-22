# OpenClaw Source Performance

Generated: 2026-07-22T08:31:44.173Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6121.4ms | 7404.1ms | 6121.5ms | 2982.1ms | 6003.8ms | 44.1ms | 955.9MB | 1.351 |
| skipChannels | gateway, skip channels | 6378.1ms | 7149.5ms | 6378.1ms | 2886.8ms | 2938.3ms | 45.4ms | 922.9MB | 1.410 |
| oneInternalHook | gateway, one configured internal hook | 7343.2ms | 7361.5ms | 7343.1ms | 4868.1ms | 4928.1ms | 48.9ms | 958.1MB | 1.228 |
| allInternalHooks | gateway, all internal hooks | 7833.8ms | 8633.7ms | 7833.7ms | 5142.2ms | 5221.2ms | 61.2ms | 943.2MB | 1.292 |
| fiftyPlugins | gateway, 50 manifest plugins | 7920.3ms | 8090.3ms | 7905.2ms | 4600.0ms | 4691.7ms | 46.7ms | 1140.2MB | 1.294 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7695.0ms | 7939.4ms | 7694.9ms | 4259.6ms | 4401.2ms | 45.8ms | 1144.7MB | 1.300 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 533.7MB | 487.3MB | ok |
| google-meet | 514.2MB | 467.8MB | ok |
| teams-meetings | 511.8MB | 465.4MB | ok |
| zoom-meetings | 509.3MB | 462.9MB | ok |
| workboard | 508.0MB | 461.6MB | ok |
| migrate-hermes | 507.9MB | 461.4MB | ok |
| codex | 507.3MB | 460.8MB | ok |
| llm-task | 505.8MB | 459.4MB | ok |
| anthropic | 505.7MB | 459.2MB | ok |
| memory-lancedb | 505.2MB | 458.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3995.1ms | 4272.3ms |
| default | post-ready.agent-runtime-plugins.total | 3983.8ms | 4246.3ms |
| default | post-attach.update-check.total | 3976.1ms | 4239.3ms |
| default | post-attach.update-sentinel.total | 3965.1ms | 4216.6ms |
| default | sidecars.restart-sentinel.total | 3963.5ms | 4214.2ms |
| skipChannels | sidecars.session-locks.total | 4567.8ms | 4829.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4564.6ms | 4826.3ms |
| skipChannels | post-attach.update-sentinel.total | 4558.3ms | 4819.3ms |
| skipChannels | sidecars.restart-sentinel.total | 4557.0ms | 4817.8ms |
| skipChannels | sidecars.ready.total | 4529.1ms | 4787.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3724.1ms | 3750.3ms |
| oneInternalHook | sidecars.session-locks.total | 3266.1ms | 3300.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3264.1ms | 3297.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3253.5ms | 3285.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3252.2ms | 3284.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3894.4ms | 4487.4ms |
| allInternalHooks | sidecars.session-locks.total | 3541.5ms | 3739.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3538.6ms | 3736.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 3527.2ms | 3724.8ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3526.0ms | 3723.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4161.7ms | 4302.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4076.6ms | 4213.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4061.0ms | 4198.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3802.9ms | 3948.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3801.8ms | 3947.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3940.7ms | 4275.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3845.8ms | 4188.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3831.9ms | 4173.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3603.5ms | 3888.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3602.4ms | 3887.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9954.0ms | 0.000 | 2437.0MB | 962.9MB | -1474.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9644.0ms | 0.207 | 861.8MB | 935.2MB | 73.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9405.0ms | 0.106 | 854.3MB | 937.3MB | 83.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3541.0ms | 3603.9ms | 60.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 812.7ms | 818.9ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 65.2ms |

## Observations

No data.


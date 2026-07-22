# OpenClaw Source Performance

Generated: 2026-07-22T11:37:44.804Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6638.8ms | 6717.9ms | 6638.7ms | 3180.6ms | 6513.0ms | 50.4ms | 920.4MB | 1.340 |
| skipChannels | gateway, skip channels | 6858.7ms | 6930.3ms | 6858.7ms | 3178.5ms | 3230.4ms | 45.4ms | 919.0MB | 1.312 |
| oneInternalHook | gateway, one configured internal hook | 7487.6ms | 8018.1ms | 7487.6ms | 4979.6ms | 5038.1ms | 48.9ms | 941.2MB | 1.371 |
| allInternalHooks | gateway, all internal hooks | 7287.6ms | 7969.8ms | 7287.6ms | 4693.2ms | 4758.9ms | 48.0ms | 970.9MB | 1.280 |
| fiftyPlugins | gateway, 50 manifest plugins | 7978.1ms | 8563.7ms | 7978.0ms | 4625.9ms | 4713.5ms | 46.9ms | 1147.2MB | 1.298 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7500.9ms | 7931.8ms | 7500.9ms | 4176.9ms | 4277.6ms | 46.0ms | 1139.1MB | 1.261 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 514.5MB | 468.1MB | ok |
| teams-meetings | 511.4MB | 464.9MB | ok |
| active-memory | 510.5MB | 464.0MB | ok |
| codex | 508.7MB | 462.2MB | ok |
| llm-task | 507.8MB | 461.3MB | ok |
| workboard | 507.1MB | 460.6MB | ok |
| migrate-hermes | 506.2MB | 459.8MB | ok |
| google-meet | 506.2MB | 459.7MB | ok |
| anthropic | 506.0MB | 459.5MB | ok |
| memory-lancedb | 503.3MB | 456.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4153.0ms | 4387.7ms |
| default | post-ready.agent-runtime-plugins.total | 4129.3ms | 4356.1ms |
| default | post-attach.update-check.total | 4124.2ms | 4348.9ms |
| default | post-attach.update-sentinel.total | 4112.1ms | 4328.4ms |
| default | sidecars.restart-sentinel.total | 4110.7ms | 4326.1ms |
| skipChannels | sidecars.session-locks.total | 4566.3ms | 4637.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4562.6ms | 4635.4ms |
| skipChannels | post-attach.update-sentinel.total | 4555.3ms | 4630.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4553.8ms | 4628.8ms |
| skipChannels | sidecars.ready.total | 4531.6ms | 4606.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3759.5ms | 3871.4ms |
| oneInternalHook | sidecars.session-locks.total | 3358.1ms | 3753.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3355.1ms | 3748.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 3341.8ms | 3731.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3340.4ms | 3729.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3583.7ms | 3704.5ms |
| allInternalHooks | sidecars.session-locks.total | 3359.6ms | 3801.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3356.7ms | 3797.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 3344.3ms | 3781.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3343.0ms | 3780.1ms |
| fiftyPlugins | sidecars.session-locks.total | 4352.2ms | 4774.7ms |
| fiftyPlugins | post-ready.maintenance.total | 4265.2ms | 4690.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4250.8ms | 4673.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3985.9ms | 4012.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3984.7ms | 4010.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4004.9ms | 4109.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3924.2ms | 4022.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3910.4ms | 4008.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3652.9ms | 3675.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3651.3ms | 3674.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10571.0ms | 0.000 | 2498.9MB | 957.0MB | -1542.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10051.0ms | 0.199 | 857.4MB | 935.1MB | 77.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9742.0ms | 0.205 | 864.0MB | 942.9MB | 78.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3205.3ms | 3289.1ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 750.3ms | 1132.4ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 66.8ms |

## Observations

No data.


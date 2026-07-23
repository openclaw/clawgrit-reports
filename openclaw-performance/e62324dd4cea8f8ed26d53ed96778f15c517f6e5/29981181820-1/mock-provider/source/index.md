# OpenClaw Source Performance

Generated: 2026-07-23T05:11:25.806Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6266.7ms | 6312.2ms | 6266.6ms | 3119.3ms | 6177.3ms | 44.5ms | 930.3MB | 1.306 |
| skipChannels | gateway, skip channels | 6946.8ms | 7170.0ms | 6946.7ms | 3541.9ms | 3602.8ms | 51.6ms | 895.4MB | 1.334 |
| oneInternalHook | gateway, one configured internal hook | 7268.9ms | 8338.6ms | 7268.8ms | 4797.3ms | 4853.1ms | 46.3ms | 949.9MB | 1.318 |
| allInternalHooks | gateway, all internal hooks | 6516.0ms | 6644.0ms | 6468.9ms | 4206.2ms | 4260.1ms | 39.6ms | 974.7MB | 1.237 |
| fiftyPlugins | gateway, 50 manifest plugins | 8379.4ms | 8399.0ms | 8379.4ms | 4187.9ms | 4270.2ms | 39.6ms | 1129.8MB | 1.194 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8199.3ms | 8237.7ms | 8199.3ms | 3972.8ms | 4056.0ms | 42.3ms | 1128.0MB | 1.231 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 532.8MB | 486.3MB | ok |
| zoom-meetings | 514.2MB | 467.8MB | ok |
| teams-meetings | 508.9MB | 462.4MB | ok |
| workboard | 508.0MB | 461.5MB | ok |
| codex | 507.6MB | 461.1MB | ok |
| google-meet | 507.2MB | 460.8MB | ok |
| voice-call | 506.4MB | 459.9MB | ok |
| migrate-hermes | 505.8MB | 459.4MB | ok |
| anthropic | 503.0MB | 456.6MB | ok |
| active-memory | 503.0MB | 456.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3926.4ms | 4014.9ms |
| default | post-ready.agent-runtime-plugins.total | 3916.0ms | 4006.6ms |
| default | post-attach.update-check.total | 3913.0ms | 4003.4ms |
| default | post-attach.update-sentinel.total | 3903.6ms | 3992.0ms |
| default | sidecars.restart-sentinel.total | 3902.4ms | 3990.8ms |
| skipChannels | sidecars.session-locks.total | 4410.7ms | 4441.7ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4408.1ms | 4438.3ms |
| skipChannels | post-attach.update-sentinel.total | 4398.0ms | 4422.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4396.7ms | 4419.7ms |
| skipChannels | sidecars.ready.total | 4373.3ms | 4378.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3803.1ms | 4192.5ms |
| oneInternalHook | sidecars.session-locks.total | 3410.1ms | 3690.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3407.3ms | 3687.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 3395.2ms | 3676.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3393.8ms | 3675.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3232.2ms | 3426.0ms |
| allInternalHooks | sidecars.session-locks.total | 2896.7ms | 2970.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2894.7ms | 2964.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 2885.1ms | 2960.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2884.1ms | 2959.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4964.5ms | 4987.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4872.4ms | 4895.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4831.9ms | 4855.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4633.2ms | 4655.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4632.3ms | 4654.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4747.6ms | 4748.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4655.0ms | 4659.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4615.9ms | 4623.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4410.3ms | 4431.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4409.5ms | 4430.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9756.0ms | 0.000 | 2480.0MB | 971.0MB | -1509.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9545.0ms | 0.105 | 825.4MB | 1009.2MB | 183.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9414.0ms | 0.106 | 873.8MB | 944.6MB | 70.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3339.6ms | 3364.9ms | 60.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 807.7ms | 826.9ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 63.5ms |

## Observations

No data.


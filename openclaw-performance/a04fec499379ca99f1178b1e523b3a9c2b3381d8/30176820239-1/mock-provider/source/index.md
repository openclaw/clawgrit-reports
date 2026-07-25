# OpenClaw Source Performance

Generated: 2026-07-25T22:09:44.946Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6180.5ms | 6240.1ms | 6180.4ms | 3167.9ms | 6062.8ms | 43.4ms | 1054.1MB | 1.305 |
| skipChannels | gateway, skip channels | 6312.5ms | 6364.4ms | 6312.5ms | 3221.1ms | 3265.0ms | 42.1ms | 1020.3MB | 1.501 |
| oneInternalHook | gateway, one configured internal hook | 6867.4ms | 6956.2ms | 6864.8ms | 4627.8ms | 4671.7ms | 42.7ms | 1164.8MB | 1.311 |
| allInternalHooks | gateway, all internal hooks | 6863.7ms | 6934.7ms | 6863.6ms | 4584.7ms | 4628.9ms | 44.0ms | 1203.6MB | 1.311 |
| fiftyPlugins | gateway, 50 manifest plugins | 8470.0ms | 8537.7ms | 8470.0ms | 4419.7ms | 4496.6ms | 41.0ms | 1172.7MB | 1.288 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8412.4ms | 8482.3ms | 8412.4ms | 4159.4ms | 4252.9ms | 41.7ms | 1128.2MB | 1.191 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 538.8MB | 492.2MB | ok |
| llm-task | 529.6MB | 483.1MB | ok |
| opencode | 520.9MB | 474.3MB | ok |
| memory-lancedb | 516.2MB | 469.6MB | ok |
| voice-call | 515.8MB | 469.3MB | ok |
| codex | 514.8MB | 468.2MB | ok |
| zoom-meetings | 512.2MB | 465.6MB | ok |
| google-meet | 510.0MB | 463.4MB | ok |
| workboard | 509.3MB | 462.7MB | ok |
| migrate-hermes | 506.6MB | 460.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3925.4ms | 3944.7ms |
| default | post-ready.agent-runtime-plugins.total | 3900.1ms | 3919.7ms |
| default | post-attach.update-check.total | 3897.5ms | 3917.0ms |
| default | post-attach.update-sentinel.total | 3887.6ms | 3907.0ms |
| default | sidecars.restart-sentinel.total | 3886.5ms | 3905.9ms |
| skipChannels | sidecars.session-locks.total | 4119.3ms | 4129.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4117.4ms | 4127.0ms |
| skipChannels | post-attach.update-sentinel.total | 4113.1ms | 4122.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4112.1ms | 4121.7ms |
| skipChannels | sidecars.ready.total | 4097.1ms | 4103.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3494.3ms | 3501.3ms |
| oneInternalHook | sidecars.session-locks.total | 3110.6ms | 3118.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3109.1ms | 3116.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 3104.9ms | 3112.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3104.0ms | 3111.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3449.6ms | 3463.8ms |
| allInternalHooks | sidecars.session-locks.total | 3056.1ms | 3119.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3054.4ms | 3110.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 3050.1ms | 3106.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3049.1ms | 3105.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4966.4ms | 4968.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4869.1ms | 4874.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4832.5ms | 4836.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4627.1ms | 4642.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4626.1ms | 4641.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4888.5ms | 4977.6ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4793.0ms | 4880.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4758.2ms | 4839.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4558.7ms | 4627.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4557.8ms | 4626.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10984.0ms | 0.000 | 2458.8MB | 1064.6MB | -1394.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10601.0ms | 0.094 | 944.2MB | 979.7MB | 35.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10459.0ms | 0.096 | 951.8MB | 973.4MB | 21.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3426.0ms | 3482.0ms | 62.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 856.1ms | 877.0ms | 61.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 5.5ms | 129.4ms |

## Observations

No data.


# OpenClaw Source Performance

Generated: 2026-07-24T16:30:33.029Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6394.1ms | 6435.7ms | 6394.0ms | 3149.2ms | 6279.2ms | 45.9ms | 978.1MB | 1.273 |
| skipChannels | gateway, skip channels | 6523.7ms | 6844.2ms | 6374.4ms | 3324.8ms | 3373.8ms | 44.0ms | 935.4MB | 1.315 |
| oneInternalHook | gateway, one configured internal hook | 6832.8ms | 6962.5ms | 6832.7ms | 4453.2ms | 4502.4ms | 44.8ms | 969.9MB | 1.333 |
| allInternalHooks | gateway, all internal hooks | 6685.7ms | 8982.3ms | 6685.6ms | 4332.9ms | 4375.6ms | 44.4ms | 984.1MB | 1.377 |
| fiftyPlugins | gateway, 50 manifest plugins | 9129.7ms | 11114.9ms | 9129.6ms | 4511.7ms | 4591.3ms | 44.6ms | 1128.0MB | 1.261 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8596.7ms | 8634.6ms | 8596.5ms | 4109.7ms | 4191.1ms | 44.7ms | 1145.7MB | 1.274 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 520.1MB | 473.6MB | ok |
| llm-task | 511.1MB | 464.6MB | ok |
| codex | 509.4MB | 463.0MB | ok |
| active-memory | 508.7MB | 462.2MB | ok |
| workboard | 508.7MB | 462.2MB | ok |
| migrate-hermes | 506.7MB | 460.3MB | ok |
| memory-lancedb | 506.2MB | 459.8MB | ok |
| anthropic | 503.7MB | 457.2MB | ok |
| zoom-meetings | 501.7MB | 455.2MB | ok |
| voice-call | 501.6MB | 455.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4045.8ms | 4127.9ms |
| default | post-ready.agent-runtime-plugins.total | 4021.7ms | 4107.3ms |
| default | post-attach.update-check.total | 4018.0ms | 4103.8ms |
| default | post-attach.update-sentinel.total | 4007.9ms | 4093.5ms |
| default | sidecars.restart-sentinel.total | 4006.5ms | 4092.2ms |
| skipChannels | sidecars.session-locks.total | 4138.2ms | 4242.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4136.2ms | 4240.8ms |
| skipChannels | post-attach.update-sentinel.total | 4131.3ms | 4235.8ms |
| skipChannels | sidecars.restart-sentinel.total | 4130.2ms | 4234.6ms |
| skipChannels | sidecars.ready.total | 4116.3ms | 4215.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3402.7ms | 3448.0ms |
| oneInternalHook | sidecars.session-locks.total | 3133.6ms | 3243.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3132.0ms | 3242.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 3123.9ms | 3236.9ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3122.6ms | 3235.6ms |
| allInternalHooks | sidecars.session-locks.total | 3725.7ms | 4419.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3723.8ms | 4416.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3713.1ms | 4400.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3711.5ms | 4398.1ms |
| allInternalHooks | sidecars.ready.total | 3688.8ms | 4367.4ms |
| fiftyPlugins | sidecars.session-locks.total | 5552.9ms | 6937.4ms |
| fiftyPlugins | post-ready.maintenance.total | 5438.5ms | 6812.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5396.3ms | 6763.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5082.9ms | 6553.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5081.4ms | 6552.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4825.4ms | 4988.4ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4733.9ms | 4888.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4698.1ms | 4848.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4501.5ms | 4635.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4500.6ms | 4634.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11526.0ms | 0.000 | 2388.9MB | 1080.5MB | -1308.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10604.0ms | 0.189 | 892.0MB | 973.2MB | 81.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10266.0ms | 0.195 | 848.2MB | 1056.1MB | 208.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3766.7ms | 4053.8ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 883.9ms | 935.6ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 79.6ms |

## Observations

No data.


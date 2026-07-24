# OpenClaw Source Performance

Generated: 2026-07-24T11:29:35.186Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6520.3ms | 6992.4ms | 6358.9ms | 3226.1ms | 6429.2ms | 47.3ms | 919.1MB | 1.291 |
| skipChannels | gateway, skip channels | 3178.9ms | 6551.6ms | 3178.6ms | 3102.1ms | 3143.6ms | 43.9ms | 896.9MB | 1.316 |
| oneInternalHook | gateway, one configured internal hook | 6965.0ms | 7219.5ms | 6965.0ms | 4604.9ms | 4647.8ms | 48.3ms | 966.9MB | 1.306 |
| allInternalHooks | gateway, all internal hooks | 4536.3ms | 7041.9ms | 4535.8ms | 4446.8ms | 4491.7ms | 44.8ms | 950.0MB | 1.331 |
| fiftyPlugins | gateway, 50 manifest plugins | 9001.2ms | 9200.0ms | 9001.2ms | 4516.2ms | 4598.6ms | 47.9ms | 1119.4MB | 1.223 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8799.8ms | 8892.8ms | 8799.7ms | 4159.0ms | 4248.0ms | 50.7ms | 1113.6MB | 1.260 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 535.3MB | 488.8MB | ok |
| codex | 513.8MB | 467.3MB | ok |
| llm-task | 511.1MB | 464.6MB | ok |
| teams-meetings | 510.4MB | 463.9MB | ok |
| voice-call | 509.2MB | 462.7MB | ok |
| google-meet | 509.0MB | 462.6MB | ok |
| zoom-meetings | 507.1MB | 460.7MB | ok |
| memory-lancedb | 505.5MB | 459.1MB | ok |
| anthropic | 505.2MB | 458.7MB | ok |
| migrate-hermes | 504.8MB | 458.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4192.6ms | 4390.0ms |
| default | post-ready.agent-runtime-plugins.total | 4171.7ms | 4366.6ms |
| default | post-attach.update-check.total | 4169.1ms | 4363.2ms |
| default | post-attach.update-sentinel.total | 4160.4ms | 4351.4ms |
| default | sidecars.restart-sentinel.total | 4159.3ms | 4350.3ms |
| skipChannels | sidecars.session-locks.total | 4331.0ms | 4331.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4328.8ms | 4328.8ms |
| skipChannels | post-attach.update-sentinel.total | 4323.0ms | 4323.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4321.6ms | 4321.6ms |
| skipChannels | sidecars.ready.total | 4302.1ms | 4302.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3533.1ms | 3593.4ms |
| oneInternalHook | sidecars.session-locks.total | 3164.8ms | 3253.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3162.9ms | 3251.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3158.0ms | 3247.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3156.9ms | 3246.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3434.9ms | 3532.7ms |
| allInternalHooks | sidecars.session-locks.total | 3148.2ms | 3148.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3146.5ms | 3146.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 3141.6ms | 3141.6ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3140.5ms | 3140.5ms |
| fiftyPlugins | sidecars.session-locks.total | 5324.0ms | 5446.6ms |
| fiftyPlugins | post-ready.maintenance.total | 5223.4ms | 5339.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5180.7ms | 5298.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4956.6ms | 5057.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4955.6ms | 5056.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5181.6ms | 5343.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5079.4ms | 5242.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5038.5ms | 5204.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4788.0ms | 4982.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4787.0ms | 4981.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10083.0ms | 0.000 | 2435.9MB | 1072.6MB | -1363.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9971.0ms | 0.201 | 875.8MB | 944.9MB | 69.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9975.0ms | 0.201 | 881.3MB | 961.8MB | 80.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3739.7ms | 3764.2ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 901.1ms | 906.6ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 74.6ms |

## Observations

No data.


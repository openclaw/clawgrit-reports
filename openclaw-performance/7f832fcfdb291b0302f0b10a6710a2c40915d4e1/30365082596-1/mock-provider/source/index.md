# OpenClaw Source Performance

Generated: 2026-07-28T13:54:50.390Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7023.8ms | 7667.6ms | 7023.7ms | 3498.9ms | 6561.9ms | 247.6ms | 1074.6MB | 1.304 |
| skipChannels | gateway, skip channels | 3193.0ms | 6591.6ms | 3190.9ms | 3102.2ms | 3144.3ms | 225.7ms | 1014.0MB | 1.566 |
| oneInternalHook | gateway, one configured internal hook | 8514.3ms | 8845.5ms | 8514.0ms | 5402.5ms | 5457.2ms | 285.8ms | 1164.5MB | 1.357 |
| allInternalHooks | gateway, all internal hooks | 9513.8ms | 9834.8ms | 9513.7ms | 5967.1ms | 6045.2ms | 295.6ms | 1119.8MB | 1.366 |
| fiftyPlugins | gateway, 50 manifest plugins | 11630.8ms | 12368.8ms | 11630.9ms | 5452.4ms | 5562.1ms | 273.7ms | 1211.5MB | 1.298 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 11518.9ms | 12469.1ms | 11519.0ms | 5617.2ms | 5745.4ms | 309.1ms | 1178.5MB | 1.302 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 571.9MB | 525.5MB | ok |
| codex | 548.1MB | 501.7MB | ok |
| opencode | 521.9MB | 475.4MB | ok |
| voice-call | 517.5MB | 471.0MB | ok |
| anthropic | 512.7MB | 466.2MB | ok |
| llm-task | 510.8MB | 464.3MB | ok |
| xai | 510.2MB | 463.7MB | ok |
| acpx | 509.2MB | 462.7MB | ok |
| migrate-hermes | 507.7MB | 461.2MB | ok |
| active-memory | 507.6MB | 461.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4555.8ms | 5104.5ms |
| default | post-ready.agent-runtime-plugins.total | 4521.2ms | 5077.6ms |
| default | post-attach.update-check.total | 4516.9ms | 5074.6ms |
| default | post-attach.update-sentinel.total | 4191.2ms | 4776.4ms |
| default | sidecars.restart-sentinel.total | 4189.9ms | 4775.3ms |
| skipChannels | sidecars.session-locks.total | 4390.6ms | 4390.6ms |
| skipChannels | post-ready.maintenance.total | 4334.1ms | 4334.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4315.5ms | 4315.5ms |
| skipChannels | post-attach.update-sentinel.total | 4025.7ms | 4025.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4024.5ms | 4024.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4050.4ms | 4329.4ms |
| oneInternalHook | sidecars.session-locks.total | 4001.2ms | 4068.4ms |
| oneInternalHook | post-ready.maintenance.total | 3967.8ms | 4032.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3945.6ms | 4006.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 3577.5ms | 3666.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4450.9ms | 4937.8ms |
| allInternalHooks | sidecars.session-locks.total | 4307.5ms | 4634.6ms |
| allInternalHooks | post-ready.maintenance.total | 4267.0ms | 4596.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4238.1ms | 4571.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 3875.7ms | 4140.9ms |
| fiftyPlugins | sidecars.session-locks.total | 7039.3ms | 7184.3ms |
| fiftyPlugins | post-ready.maintenance.total | 6955.8ms | 7075.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6874.9ms | 6977.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 6388.4ms | 6666.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 6386.6ms | 6665.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6757.8ms | 7635.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6582.5ms | 7630.6ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6568.4ms | 6663.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 6283.4ms | 6758.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 6282.0ms | 6756.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12958.0ms | 0.000 | 2452.5MB | 979.6MB | -1472.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13390.0ms | 0.149 | 1024.1MB | 1061.7MB | 37.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13192.0ms | 0.152 | 1012.5MB | 1186.2MB | 173.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4300.6ms | 4380.3ms | 187.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1042.3ms | 1062.2ms | 187.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 164.6ms |

## Observations

No data.


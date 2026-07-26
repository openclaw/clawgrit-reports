# OpenClaw Source Performance

Generated: 2026-07-26T11:41:41.799Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6066.2ms | 6156.5ms | 6066.1ms | 3163.8ms | 5967.3ms | 39.8ms | 1094.0MB | 1.323 |
| skipChannels | gateway, skip channels | 6186.5ms | 6257.2ms | 6186.4ms | 3152.6ms | 3193.5ms | 41.7ms | 1031.0MB | 1.293 |
| oneInternalHook | gateway, one configured internal hook | 4620.0ms | 6730.8ms | 4619.7ms | 4536.3ms | 4578.6ms | 43.1ms | 1188.6MB | 1.308 |
| allInternalHooks | gateway, all internal hooks | 6753.8ms | 6824.9ms | 6753.6ms | 4517.4ms | 4562.2ms | 42.0ms | 1191.4MB | 1.300 |
| fiftyPlugins | gateway, 50 manifest plugins | 8394.9ms | 8463.2ms | 8394.9ms | 4459.0ms | 4531.9ms | 41.5ms | 1149.6MB | 1.192 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8291.7ms | 8358.9ms | 8291.6ms | 4163.8ms | 4242.9ms | 44.3ms | 1137.0MB | 1.207 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 540.5MB | 493.9MB | ok |
| opencode | 516.6MB | 470.0MB | ok |
| codex | 516.3MB | 469.8MB | ok |
| workboard | 515.3MB | 468.7MB | ok |
| migrate-hermes | 512.6MB | 466.0MB | ok |
| anthropic | 508.8MB | 462.2MB | ok |
| llm-task | 507.4MB | 460.8MB | ok |
| zoom-meetings | 506.6MB | 460.1MB | ok |
| google-meet | 504.9MB | 458.3MB | ok |
| acpx | 504.5MB | 458.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3839.8ms | 3886.3ms |
| default | post-ready.agent-runtime-plugins.total | 3815.1ms | 3861.4ms |
| default | post-attach.update-check.total | 3812.5ms | 3858.6ms |
| default | post-attach.update-sentinel.total | 3803.7ms | 3849.3ms |
| default | sidecars.restart-sentinel.total | 3802.6ms | 3848.3ms |
| skipChannels | sidecars.session-locks.total | 4012.7ms | 4018.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4010.8ms | 4016.6ms |
| skipChannels | post-attach.update-sentinel.total | 4006.6ms | 4012.3ms |
| skipChannels | sidecars.restart-sentinel.total | 4005.6ms | 4011.3ms |
| skipChannels | sidecars.ready.total | 3997.3ms | 4002.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3402.9ms | 3447.9ms |
| oneInternalHook | sidecars.session-locks.total | 2939.1ms | 2939.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2937.4ms | 2937.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 2933.0ms | 2933.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2932.0ms | 2932.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3373.7ms | 3426.2ms |
| allInternalHooks | sidecars.session-locks.total | 3055.2ms | 3103.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3053.6ms | 3102.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 3049.5ms | 3098.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3048.6ms | 3097.1ms |
| fiftyPlugins | sidecars.session-locks.total | 4859.0ms | 4917.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4769.3ms | 4827.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4732.8ms | 4793.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4533.4ms | 4593.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4532.3ms | 4592.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4775.6ms | 4796.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4688.9ms | 4706.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4656.6ms | 4669.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4460.9ms | 4464.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4460.0ms | 4463.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10919.0ms | 0.000 | 2544.5MB | 981.8MB | -1562.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10443.0ms | 0.096 | 951.5MB | 976.2MB | 24.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10422.0ms | 0.096 | 889.5MB | 1033.3MB | 143.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3354.5ms | 3370.2ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 875.9ms | 876.8ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 123.7ms |

## Observations

No data.


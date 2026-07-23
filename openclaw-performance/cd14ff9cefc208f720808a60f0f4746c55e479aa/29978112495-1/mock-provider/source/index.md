# OpenClaw Source Performance

Generated: 2026-07-23T03:58:48.310Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5881.4ms | 5892.6ms | 5881.6ms | 2900.0ms | 5785.6ms | 42.0ms | 976.2MB | 1.223 |
| skipChannels | gateway, skip channels | 2948.4ms | 2977.1ms | 2948.0ms | 2872.7ms | 2913.9ms | 37.2ms | 773.1MB | 1.400 |
| oneInternalHook | gateway, one configured internal hook | 4453.7ms | 6894.5ms | 4453.5ms | 4372.0ms | 4415.0ms | 42.3ms | 938.7MB | 1.389 |
| allInternalHooks | gateway, all internal hooks | 7084.8ms | 7122.4ms | 7084.8ms | 4654.4ms | 4728.6ms | 46.0ms | 966.9MB | 1.278 |
| fiftyPlugins | gateway, 50 manifest plugins | 9514.7ms | 9747.8ms | 9514.7ms | 4755.5ms | 4849.5ms | 45.0ms | 1140.0MB | 1.261 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8306.7ms | 8515.3ms | 8306.6ms | 3969.6ms | 4055.3ms | 41.9ms | 1146.5MB | 1.213 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 573.2MB | 526.6MB | ok |
| teams-meetings | 513.1MB | 466.5MB | ok |
| llm-task | 513.0MB | 466.5MB | ok |
| active-memory | 512.2MB | 465.7MB | ok |
| codex | 508.6MB | 462.1MB | ok |
| migrate-hermes | 507.6MB | 461.0MB | ok |
| voice-call | 506.6MB | 460.0MB | ok |
| workboard | 506.6MB | 460.0MB | ok |
| anthropic | 503.5MB | 456.9MB | ok |
| google-meet | 502.3MB | 455.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3700.7ms | 3720.2ms |
| default | post-ready.agent-runtime-plugins.total | 3692.5ms | 3712.3ms |
| default | post-attach.update-check.total | 3688.0ms | 3709.7ms |
| default | post-attach.update-sentinel.total | 3679.3ms | 3701.3ms |
| default | sidecars.restart-sentinel.total | 3678.2ms | 3700.2ms |
| skipChannels | sidecars.internal-hooks.total | 868.2ms | 904.0ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 819.3ms | 843.9ms |
| skipChannels | post-attach.update-check.total | 805.0ms | 840.9ms |
| skipChannels | ready.total | 789.5ms | 824.6ms |
| skipChannels | runtime.post-attach.total | 788.0ms | 823.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3428.2ms | 3476.6ms |
| oneInternalHook | sidecars.session-locks.total | 3022.0ms | 3022.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3017.8ms | 3017.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 3009.4ms | 3009.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3008.5ms | 3008.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3593.0ms | 3682.2ms |
| allInternalHooks | sidecars.session-locks.total | 3109.3ms | 3131.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3106.6ms | 3128.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 3093.6ms | 3116.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3092.2ms | 3115.0ms |
| fiftyPlugins | sidecars.session-locks.total | 5665.4ms | 5853.9ms |
| fiftyPlugins | post-ready.maintenance.total | 5563.2ms | 5742.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5521.4ms | 5700.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5260.3ms | 5397.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5259.1ms | 5396.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4781.6ms | 5102.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4689.8ms | 4997.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4653.3ms | 4957.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4448.7ms | 4724.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4447.8ms | 4724.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10055.0ms | 0.000 | 2435.9MB | 956.1MB | -1479.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9428.0ms | 0.106 | 803.0MB | 1023.7MB | 220.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9489.0ms | 0.105 | 796.7MB | 1020.3MB | 223.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3260.7ms | 3320.6ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 765.8ms | 791.4ms | 60.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 61.1ms |

## Observations

No data.


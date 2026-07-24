# OpenClaw Source Performance

Generated: 2026-07-24T21:01:35.487Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7033.2ms | 7468.9ms | 7033.1ms | 3670.7ms | 6896.8ms | 51.4ms | 1008.3MB | 1.339 |
| skipChannels | gateway, skip channels | 3215.9ms | 6638.7ms | 3215.5ms | 3139.5ms | 3185.0ms | 47.7ms | 915.9MB | 1.356 |
| oneInternalHook | gateway, one configured internal hook | 4923.2ms | 7164.9ms | 4923.1ms | 4764.9ms | 4820.9ms | 44.1ms | 965.7MB | 1.298 |
| allInternalHooks | gateway, all internal hooks | 7906.7ms | 9297.5ms | 7906.7ms | 5387.7ms | 5442.8ms | 48.9ms | 979.1MB | 1.330 |
| fiftyPlugins | gateway, 50 manifest plugins | 11146.9ms | 11610.0ms | 11146.9ms | 5471.3ms | 5605.9ms | 52.6ms | 1139.4MB | 1.292 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9643.5ms | 10547.1ms | 9643.4ms | 4738.8ms | 4847.9ms | 46.6ms | 1139.5MB | 1.252 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 521.6MB | 475.3MB | ok |
| teams-meetings | 513.5MB | 467.2MB | ok |
| codex | 511.5MB | 465.1MB | ok |
| migrate-hermes | 507.9MB | 461.6MB | ok |
| active-memory | 507.3MB | 460.9MB | ok |
| workboard | 507.2MB | 460.9MB | ok |
| xai | 506.5MB | 460.1MB | ok |
| voice-call | 505.6MB | 459.3MB | ok |
| llm-task | 505.0MB | 458.7MB | ok |
| anthropic | 504.7MB | 458.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4387.8ms | 4785.9ms |
| default | post-ready.agent-runtime-plugins.total | 4358.0ms | 4758.8ms |
| default | post-attach.update-check.total | 4351.6ms | 4754.4ms |
| default | post-attach.update-sentinel.total | 4338.8ms | 4741.9ms |
| default | sidecars.restart-sentinel.total | 4337.1ms | 4740.3ms |
| skipChannels | sidecars.session-locks.total | 4279.0ms | 4279.0ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4276.9ms | 4276.9ms |
| skipChannels | post-attach.update-sentinel.total | 4272.0ms | 4272.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4270.7ms | 4270.7ms |
| skipChannels | sidecars.ready.total | 4252.9ms | 4252.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3570.8ms | 3677.3ms |
| oneInternalHook | sidecars.session-locks.total | 3230.8ms | 3230.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3228.9ms | 3228.9ms |
| oneInternalHook | post-attach.update-sentinel.total | 3217.7ms | 3217.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3216.5ms | 3216.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3961.7ms | 5015.2ms |
| allInternalHooks | sidecars.session-locks.total | 3528.8ms | 3836.4ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3526.9ms | 3833.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 3517.3ms | 3823.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3516.0ms | 3821.7ms |
| fiftyPlugins | sidecars.session-locks.total | 6668.8ms | 7271.0ms |
| fiftyPlugins | post-ready.maintenance.total | 6536.1ms | 7173.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6481.6ms | 7132.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 6062.2ms | 6810.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 6060.6ms | 6807.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5706.4ms | 5734.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5594.3ms | 5625.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5552.5ms | 5582.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5278.8ms | 5290.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5277.0ms | 5288.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11168.0ms | 0.000 | 2458.2MB | 1105.9MB | -1352.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10483.0ms | 0.191 | 899.8MB | 1014.6MB | 114.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10019.0ms | 0.200 | 861.6MB | 1078.8MB | 217.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3701.2ms | 3728.7ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 858.3ms | 862.8ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 127.2ms |

## Observations

No data.


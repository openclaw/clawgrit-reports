# OpenClaw Source Performance

Generated: 2026-07-26T01:02:18.395Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6207.4ms | 6297.3ms | 6207.3ms | 3196.2ms | 6083.9ms | 41.8ms | 1040.5MB | 1.304 |
| skipChannels | gateway, skip channels | 6187.6ms | 6292.3ms | 6187.6ms | 3150.8ms | 3191.5ms | 40.5ms | 1024.9MB | 1.293 |
| oneInternalHook | gateway, one configured internal hook | 7161.2ms | 7164.7ms | 7161.1ms | 4789.4ms | 4834.3ms | 41.2ms | 1181.2MB | 1.307 |
| allInternalHooks | gateway, all internal hooks | 4634.2ms | 6724.3ms | 4602.7ms | 4516.0ms | 4556.6ms | 40.5ms | 1166.0MB | 1.306 |
| fiftyPlugins | gateway, 50 manifest plugins | 8378.6ms | 8470.8ms | 8378.6ms | 4430.3ms | 4517.0ms | 41.3ms | 1160.5MB | 1.199 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8181.2ms | 8192.0ms | 8181.2ms | 4067.1ms | 4151.2ms | 43.3ms | 1177.2MB | 1.235 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 547.2MB | 500.7MB | ok |
| active-memory | 540.1MB | 493.7MB | ok |
| zoom-meetings | 513.8MB | 467.3MB | ok |
| codex | 513.2MB | 466.7MB | ok |
| anthropic | 507.9MB | 461.5MB | ok |
| xai | 507.8MB | 461.3MB | ok |
| teams-meetings | 507.6MB | 461.1MB | ok |
| workboard | 506.2MB | 459.7MB | ok |
| acpx | 506.1MB | 459.7MB | ok |
| voice-call | 505.6MB | 459.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3918.9ms | 4021.4ms |
| default | post-ready.agent-runtime-plugins.total | 3894.2ms | 3991.6ms |
| default | post-attach.update-check.total | 3891.6ms | 3987.9ms |
| default | post-attach.update-sentinel.total | 3882.5ms | 3976.7ms |
| default | sidecars.restart-sentinel.total | 3881.5ms | 3975.6ms |
| skipChannels | sidecars.session-locks.total | 4051.4ms | 4109.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4044.5ms | 4100.0ms |
| skipChannels | post-attach.update-sentinel.total | 4039.8ms | 4095.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4038.8ms | 4094.6ms |
| skipChannels | sidecars.ready.total | 4021.8ms | 4081.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3606.9ms | 3630.5ms |
| oneInternalHook | sidecars.session-locks.total | 3173.9ms | 3208.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3172.2ms | 3206.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 3167.4ms | 3202.1ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3166.4ms | 3201.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3396.6ms | 3442.5ms |
| allInternalHooks | sidecars.session-locks.total | 2992.8ms | 2992.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2991.2ms | 2991.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 2986.8ms | 2986.8ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2985.7ms | 2985.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4874.3ms | 4915.8ms |
| fiftyPlugins | post-ready.maintenance.total | 4784.5ms | 4825.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4750.2ms | 4790.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4546.9ms | 4587.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4546.0ms | 4586.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4654.7ms | 4746.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4568.7ms | 4655.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4536.6ms | 4618.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4339.8ms | 4417.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4338.8ms | 4416.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11065.0ms | 0.000 | 2506.9MB | 1122.0MB | -1384.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10471.0ms | 0.096 | 866.6MB | 1031.1MB | 164.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10340.0ms | 0.097 | 954.8MB | 981.3MB | 26.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3446.5ms | 3504.1ms | 61.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 826.1ms | 836.4ms | 62.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 123.7ms |

## Observations

No data.


# OpenClaw Source Performance

Generated: 2026-07-23T02:37:55.849Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5956.5ms | 6066.1ms | 5905.0ms | 2893.3ms | 5846.1ms | 41.7ms | 912.7MB | 1.319 |
| skipChannels | gateway, skip channels | 3195.1ms | 6247.7ms | 3194.7ms | 3034.4ms | 3077.3ms | 43.6ms | 920.5MB | 1.283 |
| oneInternalHook | gateway, one configured internal hook | 4218.3ms | 6571.0ms | 4218.2ms | 4145.1ms | 4183.4ms | 38.3ms | 963.4MB | 1.217 |
| allInternalHooks | gateway, all internal hooks | 4523.0ms | 6921.3ms | 4522.7ms | 4431.9ms | 4488.6ms | 42.6ms | 933.7MB | 1.327 |
| fiftyPlugins | gateway, 50 manifest plugins | 8760.3ms | 9485.2ms | 8760.2ms | 4416.1ms | 4531.4ms | 42.1ms | 1127.0MB | 1.265 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8576.0ms | 8906.1ms | 8576.0ms | 4067.7ms | 4158.9ms | 44.1ms | 1132.0MB | 1.235 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 578.2MB | 531.6MB | ok |
| workboard | 513.4MB | 466.8MB | ok |
| codex | 510.1MB | 463.5MB | ok |
| migrate-hermes | 509.6MB | 463.0MB | ok |
| zoom-meetings | 508.3MB | 461.7MB | ok |
| teams-meetings | 506.3MB | 459.7MB | ok |
| anthropic | 505.7MB | 459.1MB | ok |
| voice-call | 504.7MB | 458.1MB | ok |
| google-meet | 504.7MB | 458.1MB | ok |
| memory-lancedb | 502.8MB | 456.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3828.6ms | 3842.8ms |
| default | post-ready.agent-runtime-plugins.total | 3817.2ms | 3823.1ms |
| default | post-attach.update-check.total | 3814.3ms | 3820.2ms |
| default | post-attach.update-sentinel.total | 3805.2ms | 3810.8ms |
| default | sidecars.restart-sentinel.total | 3804.1ms | 3809.5ms |
| skipChannels | sidecars.session-locks.total | 4023.7ms | 4023.7ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4020.9ms | 4020.9ms |
| skipChannels | post-attach.update-sentinel.total | 4015.9ms | 4015.9ms |
| skipChannels | sidecars.restart-sentinel.total | 4014.7ms | 4014.7ms |
| skipChannels | sidecars.ready.total | 3977.2ms | 3977.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3214.8ms | 3287.3ms |
| oneInternalHook | sidecars.session-locks.total | 2954.9ms | 2954.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2952.8ms | 2952.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 2948.2ms | 2948.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2947.1ms | 2947.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3446.3ms | 3467.0ms |
| allInternalHooks | sidecars.session-locks.total | 3122.6ms | 3122.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3120.4ms | 3120.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3116.0ms | 3116.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3115.0ms | 3115.0ms |
| fiftyPlugins | sidecars.session-locks.total | 5123.8ms | 5861.8ms |
| fiftyPlugins | post-ready.maintenance.total | 5035.3ms | 5751.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4999.8ms | 5708.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4807.3ms | 5499.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4806.4ms | 5498.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5017.9ms | 5318.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4915.3ms | 5222.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4876.3ms | 5180.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4651.8ms | 4966.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4650.8ms | 4965.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10342.0ms | 0.000 | 2407.0MB | 1045.7MB | -1361.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9849.0ms | 0.203 | 834.4MB | 1009.8MB | 175.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9644.0ms | 0.104 | 874.1MB | 952.4MB | 78.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3347.8ms | 3433.5ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 815.3ms | 817.3ms | 60.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 64.2ms |

## Observations

No data.


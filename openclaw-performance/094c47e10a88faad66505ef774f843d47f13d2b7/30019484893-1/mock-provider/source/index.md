# OpenClaw Source Performance

Generated: 2026-07-23T15:42:41.615Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5980.6ms | 6128.7ms | 5980.5ms | 3030.1ms | 5887.0ms | 46.0ms | 902.3MB | 1.338 |
| skipChannels | gateway, skip channels | 3158.8ms | 6219.2ms | 3158.5ms | 3075.9ms | 3121.9ms | 43.7ms | 904.1MB | 1.307 |
| oneInternalHook | gateway, one configured internal hook | 5030.6ms | 6864.9ms | 5030.2ms | 4435.2ms | 4490.0ms | 43.6ms | 955.9MB | 1.391 |
| allInternalHooks | gateway, all internal hooks | 7126.0ms | 7396.1ms | 7125.9ms | 4588.9ms | 4632.0ms | 46.0ms | 965.4MB | 1.314 |
| fiftyPlugins | gateway, 50 manifest plugins | 9086.7ms | 9864.1ms | 9086.6ms | 4518.4ms | 4601.5ms | 44.0ms | 1130.8MB | 1.213 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10859.4ms | 11341.3ms | 10843.3ms | 4831.0ms | 4942.7ms | 51.5ms | 1158.3MB | 1.289 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 514.7MB | 468.1MB | ok |
| active-memory | 513.0MB | 466.4MB | ok |
| workboard | 512.5MB | 465.9MB | ok |
| xai | 512.3MB | 465.7MB | ok |
| codex | 511.4MB | 464.8MB | ok |
| memory-lancedb | 511.0MB | 464.5MB | ok |
| zoom-meetings | 509.4MB | 462.8MB | ok |
| llm-task | 507.2MB | 460.6MB | ok |
| migrate-hermes | 504.2MB | 457.6MB | ok |
| anthropic | 503.4MB | 456.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3751.2ms | 3846.0ms |
| default | post-ready.agent-runtime-plugins.total | 3730.5ms | 3824.1ms |
| default | post-attach.update-check.total | 3728.0ms | 3821.2ms |
| default | post-attach.update-sentinel.total | 3720.1ms | 3812.4ms |
| default | sidecars.restart-sentinel.total | 3719.1ms | 3811.2ms |
| skipChannels | sidecars.session-locks.total | 3869.4ms | 3869.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3867.0ms | 3867.0ms |
| skipChannels | post-attach.update-sentinel.total | 3857.9ms | 3857.9ms |
| skipChannels | sidecars.restart-sentinel.total | 3856.9ms | 3856.9ms |
| skipChannels | sidecars.ready.total | 3838.5ms | 3838.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3428.2ms | 3627.3ms |
| oneInternalHook | sidecars.session-locks.total | 3084.7ms | 3084.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3082.1ms | 3082.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 3072.7ms | 3072.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3071.5ms | 3071.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3514.2ms | 3752.9ms |
| allInternalHooks | sidecars.session-locks.total | 3233.5ms | 3284.4ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3230.7ms | 3281.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3218.3ms | 3269.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3216.8ms | 3268.3ms |
| fiftyPlugins | sidecars.session-locks.total | 5388.0ms | 6200.1ms |
| fiftyPlugins | post-ready.maintenance.total | 5290.9ms | 6093.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5253.6ms | 6054.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5041.3ms | 5823.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5040.3ms | 5822.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6725.6ms | 7067.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6610.6ms | 6957.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6559.4ms | 6912.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 6080.3ms | 6413.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 6078.8ms | 6412.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10281.0ms | 0.000 | 2476.5MB | 958.6MB | -1517.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10633.0ms | 0.188 | 808.4MB | 1019.5MB | 211.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10501.0ms | 0.095 | 810.3MB | 1027.0MB | 216.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3642.5ms | 3760.6ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 820.6ms | 846.4ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 69.1ms |

## Observations

No data.


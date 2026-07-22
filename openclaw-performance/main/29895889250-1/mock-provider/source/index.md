# OpenClaw Source Performance

Generated: 2026-07-22T06:15:18.560Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5592.0ms | 5747.7ms | 5591.9ms | 2728.0ms | 5490.5ms | 42.5ms | 917.9MB | 1.284 |
| skipChannels | gateway, skip channels | 3258.9ms | 6355.3ms | 3258.5ms | 3136.1ms | 3193.9ms | 47.9ms | 876.5MB | 1.534 |
| oneInternalHook | gateway, one configured internal hook | 4665.5ms | 7369.6ms | 4665.3ms | 4592.4ms | 4633.2ms | 47.8ms | 957.9MB | 1.402 |
| allInternalHooks | gateway, all internal hooks | 6272.4ms | 6516.0ms | 6272.4ms | 4103.5ms | 4168.3ms | 46.4ms | 947.0MB | 1.275 |
| fiftyPlugins | gateway, 50 manifest plugins | 7132.7ms | 7157.0ms | 7132.6ms | 4054.6ms | 4136.2ms | 42.2ms | 1135.8MB | 1.294 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6880.7ms | 7040.5ms | 6880.6ms | 3867.9ms | 3953.1ms | 40.8ms | 1153.8MB | 1.308 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 958.4MB | 917.9MB | -40.6MB (-4.2%) | -62.2MB (-11.6%) | stable |
| gateway boot | skipChannels | 878.6MB | 876.5MB | -2.1MB (-0.2%) | +261.8MB (+112.3%) | stable |
| gateway boot | oneInternalHook | 928.6MB | 957.9MB | +29.2MB (+3.1%) | -282.0MB (-43.4%) | stable |
| gateway boot | allInternalHooks | 928.7MB | 947.0MB | +18.3MB (+2.0%) | +4.2MB (+1.5%) | stable |
| gateway boot | fiftyPlugins | 1097.0MB | 1135.8MB | +38.8MB (+3.5%) | +8.4MB (+1.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1111.0MB | 1153.8MB | +42.8MB (+3.8%) | -30.8MB (-5.1%) | stable |
| cli | gatewayHealthJson | 60.3MB | 60.2MB | -0.1MB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 60.1MB | 60.9MB | +0.8MB (+1.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -463.8MB | -440.7MB | +23.2MB (-5.0%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 523.7MB | 477.2MB | ok |
| active-memory | 517.5MB | 471.0MB | ok |
| migrate-hermes | 513.8MB | 467.4MB | ok |
| codex | 511.0MB | 464.5MB | ok |
| teams-meetings | 510.6MB | 464.1MB | ok |
| zoom-meetings | 507.6MB | 461.2MB | ok |
| anthropic | 507.0MB | 460.6MB | ok |
| google-meet | 506.2MB | 459.7MB | ok |
| llm-task | 505.0MB | 458.5MB | ok |
| voice-call | 503.5MB | 457.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3601.4ms | 3705.6ms |
| default | post-ready.agent-runtime-plugins.total | 3578.0ms | 3684.7ms |
| default | post-attach.update-check.total | 3575.5ms | 3682.2ms |
| default | post-attach.update-sentinel.total | 3566.7ms | 3674.3ms |
| default | sidecars.restart-sentinel.total | 3565.6ms | 3673.2ms |
| skipChannels | sidecars.session-locks.total | 4079.8ms | 4079.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4077.5ms | 4077.5ms |
| skipChannels | post-attach.update-sentinel.total | 4073.0ms | 4073.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4072.0ms | 4072.0ms |
| skipChannels | sidecars.ready.total | 4050.9ms | 4050.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3501.2ms | 3803.1ms |
| oneInternalHook | sidecars.session-locks.total | 3201.2ms | 3201.2ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3198.2ms | 3198.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 3184.6ms | 3184.6ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3183.5ms | 3183.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3101.0ms | 3172.7ms |
| allInternalHooks | sidecars.session-locks.total | 2928.8ms | 3062.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2926.2ms | 3058.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 2915.3ms | 3046.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2914.2ms | 3044.8ms |
| fiftyPlugins | sidecars.session-locks.total | 3778.8ms | 3871.6ms |
| fiftyPlugins | post-ready.maintenance.total | 3703.8ms | 3796.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3690.6ms | 3782.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3475.7ms | 3511.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3474.8ms | 3510.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3513.2ms | 3595.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3436.0ms | 3513.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3422.7ms | 3499.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3201.7ms | 3282.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3200.6ms | 3281.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9302.0ms | 0.000 | 2383.8MB | 933.3MB | -1450.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9227.0ms | 0.217 | 847.5MB | 918.2MB | 70.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9046.0ms | 0.221 | 858.1MB | 915.8MB | 57.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3393.2ms | 3424.0ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 813.6ms | 829.8ms | 60.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 67.3ms |

## Observations

No data.


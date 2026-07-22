# OpenClaw Source Performance

Generated: 2026-07-22T14:58:55.974Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8119.0ms | 8242.5ms | 8118.8ms | 3705.8ms | 7880.6ms | 62.1ms | 986.8MB | 1.355 |
| skipChannels | gateway, skip channels | 7552.5ms | 7763.9ms | 7552.2ms | 3536.1ms | 3589.2ms | 54.0ms | 875.6MB | 1.343 |
| oneInternalHook | gateway, one configured internal hook | 8677.8ms | 9566.6ms | 8677.6ms | 5495.1ms | 5559.5ms | 49.9ms | 935.4MB | 1.306 |
| allInternalHooks | gateway, all internal hooks | 10143.2ms | 10238.6ms | 10143.1ms | 6715.3ms | 6782.5ms | 71.8ms | 946.3MB | 1.367 |
| fiftyPlugins | gateway, 50 manifest plugins | 9453.7ms | 10693.5ms | 9453.0ms | 5198.8ms | 5293.1ms | 55.7ms | 1122.6MB | 1.269 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8418.4ms | 8704.6ms | 8418.3ms | 4688.9ms | 4796.8ms | 52.0ms | 1145.5MB | 1.307 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 514.4MB | 467.9MB | ok |
| google-meet | 514.1MB | 467.7MB | ok |
| workboard | 510.7MB | 464.3MB | ok |
| teams-meetings | 510.4MB | 463.9MB | ok |
| active-memory | 509.1MB | 462.7MB | ok |
| zoom-meetings | 508.9MB | 462.5MB | ok |
| llm-task | 508.2MB | 461.7MB | ok |
| codex | 507.8MB | 461.4MB | ok |
| memory-lancedb | 505.4MB | 458.9MB | ok |
| voice-call | 503.6MB | 457.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5236.2ms | 5474.4ms |
| default | post-ready.agent-runtime-plugins.total | 5215.5ms | 5440.1ms |
| default | post-attach.update-check.total | 5212.0ms | 5433.9ms |
| default | post-attach.update-sentinel.total | 5201.7ms | 5416.6ms |
| default | sidecars.restart-sentinel.total | 5200.4ms | 5413.9ms |
| skipChannels | sidecars.session-locks.total | 5046.0ms | 5250.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5042.0ms | 5244.4ms |
| skipChannels | post-attach.update-sentinel.total | 5034.4ms | 5222.9ms |
| skipChannels | sidecars.restart-sentinel.total | 5032.8ms | 5220.7ms |
| skipChannels | post-ready.maintenance.total | 5017.1ms | 5310.8ms |
| oneInternalHook | sidecars.session-locks.total | 4253.2ms | 4718.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4249.0ms | 4713.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 4234.2ms | 4696.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 4232.2ms | 4694.6ms |
| oneInternalHook | sidecars.ready.total | 4202.2ms | 4665.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4985.5ms | 5539.5ms |
| allInternalHooks | sidecars.session-locks.total | 4267.0ms | 4544.1ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4263.2ms | 4540.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 4249.3ms | 4525.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 4247.9ms | 4523.8ms |
| fiftyPlugins | sidecars.session-locks.total | 5391.2ms | 6425.1ms |
| fiftyPlugins | post-ready.maintenance.total | 5235.1ms | 6319.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5215.2ms | 6301.3ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4623.2ms | 5980.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4621.4ms | 5978.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4315.7ms | 4329.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4205.0ms | 4221.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4185.6ms | 4205.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3822.4ms | 3938.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3821.3ms | 3937.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11679.0ms | 0.000 | 2465.0MB | 956.3MB | -1508.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11024.0ms | 0.181 | 854.5MB | 937.0MB | 82.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11925.0ms | 0.168 | 825.5MB | 1007.5MB | 182.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4075.1ms | 4174.8ms | 60.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 984.1ms | 1048.7ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 109.6ms |

## Observations

No data.


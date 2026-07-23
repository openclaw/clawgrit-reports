# OpenClaw Source Performance

Generated: 2026-07-23T09:09:25.806Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6036.8ms | 7075.5ms | 6036.7ms | 2989.2ms | 5939.7ms | 40.5ms | 911.8MB | 1.325 |
| skipChannels | gateway, skip channels | 3270.7ms | 3406.4ms | 3270.2ms | 3189.4ms | 3233.4ms | 49.2ms | 777.4MB | 1.468 |
| oneInternalHook | gateway, one configured internal hook | 7267.2ms | 7592.2ms | 7267.1ms | 4858.8ms | 4915.9ms | 44.6ms | 974.9MB | 1.272 |
| allInternalHooks | gateway, all internal hooks | 6701.9ms | 7227.9ms | 6701.9ms | 4456.1ms | 4525.9ms | 46.2ms | 960.8MB | 1.284 |
| fiftyPlugins | gateway, 50 manifest plugins | 8833.1ms | 9085.0ms | 8833.0ms | 4352.3ms | 4432.1ms | 43.8ms | 1128.7MB | 1.257 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8761.5ms | 8898.2ms | 8761.4ms | 4082.5ms | 4164.9ms | 43.2ms | 1148.2MB | 1.281 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 570.7MB | 524.1MB | ok |
| teams-meetings | 531.7MB | 485.1MB | ok |
| active-memory | 530.4MB | 483.8MB | ok |
| llm-task | 511.6MB | 465.0MB | ok |
| anthropic | 509.5MB | 462.9MB | ok |
| voice-call | 509.4MB | 462.8MB | ok |
| memory-lancedb | 507.5MB | 460.9MB | ok |
| codex | 505.5MB | 459.0MB | ok |
| workboard | 505.5MB | 459.0MB | ok |
| migrate-hermes | 503.9MB | 457.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3776.7ms | 4495.9ms |
| default | post-ready.agent-runtime-plugins.total | 3759.7ms | 4487.4ms |
| default | post-attach.update-check.total | 3756.9ms | 4483.8ms |
| default | post-attach.update-sentinel.total | 3747.8ms | 4471.1ms |
| default | sidecars.restart-sentinel.total | 3746.7ms | 4469.8ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 945.5ms | 1059.9ms |
| skipChannels | sidecars.internal-hooks.total | 940.5ms | 958.2ms |
| skipChannels | post-attach.update-check.total | 906.1ms | 927.7ms |
| skipChannels | ready.total | 888.2ms | 909.8ms |
| skipChannels | runtime.post-attach.total | 886.6ms | 908.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3711.1ms | 3844.6ms |
| oneInternalHook | sidecars.session-locks.total | 3063.2ms | 3477.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3060.7ms | 3474.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3050.7ms | 3459.6ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3049.5ms | 3458.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3456.3ms | 3537.8ms |
| allInternalHooks | sidecars.session-locks.total | 3248.3ms | 3594.1ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3245.5ms | 3590.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 3233.7ms | 3575.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3232.4ms | 3573.6ms |
| fiftyPlugins | sidecars.session-locks.total | 5318.3ms | 5441.3ms |
| fiftyPlugins | post-ready.maintenance.total | 5220.4ms | 5343.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5179.4ms | 5304.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4948.3ms | 5081.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4947.2ms | 5080.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5224.4ms | 5237.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5129.8ms | 5131.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5091.6ms | 5093.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4847.3ms | 4872.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4846.1ms | 4871.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11053.0ms | 0.000 | 2479.7MB | 963.3MB | -1516.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10494.0ms | 0.191 | 868.9MB | 941.0MB | 72.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10444.0ms | 0.191 | 867.2MB | 952.6MB | 85.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3699.0ms | 3962.0ms | 60.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 834.9ms | 856.9ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 72.5ms |

## Observations

No data.


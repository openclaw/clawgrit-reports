# OpenClaw Source Performance

Generated: 2026-07-29T16:47:09.790Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6937.5ms | 7119.0ms | 6937.4ms | 3358.1ms | 6386.9ms | 242.7ms | 1039.1MB | 1.326 |
| skipChannels | gateway, skip channels | 6789.5ms | 7290.9ms | 6789.4ms | 3404.0ms | 3423.6ms | 239.8ms | 995.0MB | 1.422 |
| oneInternalHook | gateway, one configured internal hook | 7972.3ms | 8112.5ms | 7972.4ms | 5045.3ms | 5063.3ms | 254.0ms | 1161.4MB | 1.404 |
| allInternalHooks | gateway, all internal hooks | 7868.2ms | 8014.3ms | 7867.9ms | 5063.1ms | 5075.9ms | 255.2ms | 1160.5MB | 1.335 |
| fiftyPlugins | gateway, 50 manifest plugins | 9620.1ms | 9983.9ms | 9564.7ms | 3708.2ms | 3761.7ms | 254.5ms | 1052.9MB | 1.302 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9654.6ms | 10535.4ms | 9654.0ms | 3169.5ms | 3236.5ms | 249.9ms | 1038.0MB | 1.329 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| openai | 576.6MB | 530.9MB | ok |
| opencode | 556.7MB | 511.0MB | ok |
| memory-lancedb | 555.9MB | 510.2MB | ok |
| codex | 548.1MB | 502.4MB | ok |
| anthropic | 537.1MB | 491.4MB | ok |
| acpx | 536.6MB | 490.9MB | ok |
| active-memory | 526.9MB | 481.2MB | ok |
| google-meet | 516.5MB | 470.8MB | ok |
| voice-call | 512.2MB | 466.5MB | ok |
| llm-task | 509.6MB | 463.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-data.plugins.total | 4698.2ms | 4813.5ms |
| default | sidecars.session-locks.total | 4581.7ms | 4704.5ms |
| default | post-ready.agent-runtime-plugins.total | 4478.4ms | 4567.5ms |
| default | post-ready.gateway-data.sessions.main.total | 4475.3ms | 4563.2ms |
| default | post-attach.update-check.total | 4468.4ms | 4554.2ms |
| skipChannels | post-ready.gateway-data.plugins.total | 4883.4ms | 5074.2ms |
| skipChannels | sidecars.session-locks.total | 4753.5ms | 4945.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4672.1ms | 4855.4ms |
| skipChannels | post-ready.gateway-data.sessions.main.total | 4668.5ms | 4851.6ms |
| skipChannels | post-attach.update-sentinel.total | 4343.4ms | 4493.8ms |
| oneInternalHook | post-ready.gateway-data.plugins.total | 3883.7ms | 3937.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3731.4ms | 4044.6ms |
| oneInternalHook | sidecars.session-locks.total | 3719.9ms | 3777.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3637.2ms | 3700.3ms |
| oneInternalHook | post-ready.gateway-data.sessions.main.total | 3633.3ms | 3696.9ms |
| allInternalHooks | post-ready.gateway-data.plugins.total | 3904.3ms | 3952.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3778.7ms | 3819.0ms |
| allInternalHooks | sidecars.session-locks.total | 3701.1ms | 3744.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3618.7ms | 3667.5ms |
| allInternalHooks | post-ready.gateway-data.sessions.main.total | 3614.6ms | 3664.1ms |
| fiftyPlugins | post-ready.gateway-data.plugins.total | 7261.6ms | 7463.5ms |
| fiftyPlugins | post-ready.maintenance.total | 7031.1ms | 7033.2ms |
| fiftyPlugins | sidecars.session-locks.total | 6990.6ms | 7222.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6901.6ms | 6953.4ms |
| fiftyPlugins | post-ready.gateway-data.sessions.main.total | 6898.2ms | 6949.5ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins.total | 7388.4ms | 8008.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 7240.0ms | 7837.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 7150.3ms | 7479.2ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.sessions.main.total | 7144.8ms | 7473.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 7135.6ms | 7460.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13175.0ms | 0.000 | 2701.2MB | 1077.5MB | -1623.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 13074.0ms | 0.153 | 1032.0MB | 1162.1MB | 130.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12916.0ms | 0.155 | 1103.8MB | 1144.8MB | 41.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 831.0ms | 983.2ms | 187.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1189.3ms | 1358.6ms | 186.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 194.8ms |

## Observations

No data.


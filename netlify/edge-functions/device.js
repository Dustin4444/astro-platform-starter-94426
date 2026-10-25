export default async (request, context) => {
    const url = new URL(request.url);
    const payload = {
        ok: true,
        path: url.pathname,
        method: request.method,
        userAgent: request.headers.get('user-agent') || null,
        geo: context.geo || null,
        ip: context.ip || null,
        site: context.site || null,
        requestId: context.requestId || null
    };

    return new Response(JSON.stringify(payload, null, 2), {
        status: 200,
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    });
};

export const config = {
    path: '/device/edge/api/v2'
};
